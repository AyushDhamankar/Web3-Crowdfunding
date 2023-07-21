import { Link } from "react-router-dom";
function Hero() {
  const styles = {
    minHeight: "90vh",
  };
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" style={ styles }>
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font lg:text-5xl sm:text-4xl text-3xl mb-4 font-medium text-white">Fund the Future,  {' '} 
        <br class="hidden lg:inline-block" />Change Lives!
      </h1>
      <p class="mb-8 lg:text-2xl leading-relaxed">Our platform is dedicated to bringing innovative ideas and inspiring projects to life. Join us in supporting the creators and visionaries who are shaping a better tomorrow.</p>
      <div class="flex md:flex-row flex-col justify-center items-center">
        <button class="inline-flex lg:mb-0 mb-8 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link to="/register" class="hover:text-white">Create Campaign</Link></button>
        <button class="lg:ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"><Link to="/post" class="hover:text-white">Explore</Link></button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://cdn-icons-png.flaticon.com/512/2246/2246969.png" />
    </div>
  </div>
</section>
  );
}

export default Hero;