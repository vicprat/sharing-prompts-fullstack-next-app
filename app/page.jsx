import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Sahre
            <br />
            <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Promptopia is a community of writers, artists, and creatives who use AI to generate prompts for their work.
        </p>
        <Feed />
    </section>
  )
}

export default Home