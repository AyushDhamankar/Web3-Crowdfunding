import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Post({ state, setDetails }) {
  const [detail, setDetail] = useState("");
  const { web3 } = state;
  useEffect(() => {
    const { contract, web3 } = state;
    const getDetail = async () => {
      const nameText = await contract.methods.getCampaigns().call();
      console.log(nameText);
      setDetail(nameText);
    };
    contract && getDetail();
  }, [state]);
  return (
    <>
      <div
        style={{
          minHeight: "90vh",
          backgroundColor: "#111827",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {detail !== "" &&
          detail.map((detail) => {
            console.log(detail);
            return (
              <div
                class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
                style={{
                  marginTop: "60px",
                  marginBottom: "60px",
                  maxWidth: "672px",
                }}
              >
                <img
                  class="object-cover w-full h-64"
                  src={detail[7]}
                  alt="Article"
                />

                <div class="p-6">
                  <div>
                    <a
                      href="#"
                      class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                      tabindex="0"
                      role="link"
                    >
                      {detail[2]}
                    </a>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {detail[3]}
                    </p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Target Amount : { web3.utils.fromWei(detail[4].toString(), "ether") } ETH
                    </p>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Deadline: {new Date(detail[5] * 1000).toString()}
                    </p>
                  </div>

                  <div class="mt-4">
                    <div class="flex items-center" style={{ direction: 'rtl' }}>
                      <button class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" onClick={() => {
                        setDetails(detail);
                        console.log(detail);
                      }}>
                      <Link to="/campaign" >
                        View
                      </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Post;
