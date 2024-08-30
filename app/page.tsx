import Feed from "@components/Feed";

const home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Explore & Inspire
        <br className="max-md:hidden" />
        <span className="pink_gradient text-center"> AI Prompts</span>
      </h1>
      <p className="desc text-center">
      Welcome to Promptnest, your creative sanctuary for discovering and 
      sharing the perfect prompts. Whether seeking inspiration or 
      fueling your next big idea, Promptnest is where creativity takes flight. 
      Nest your ideas, explore new horizons, and connect with a community of thinkers 
      and creators—all in one place.
      </p>

      {/* <Feed /> */}
    </section>
  )
}

export default home;
