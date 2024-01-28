import Arrow from "./Arrow"

function About(){
    
  return (
    <>
      <div style={{ margin: "auto", width: "50%" }}>
        <h1 className="title"> RealAIs </h1>
        <h2>Who We Are</h2>
        <p>
          RealAIs is a project dedicated to education the public on how to detect AI generated photos.
        </p>
        <h2>How It Works</h2>
        <p>
          RealAIs teaches techniques to determine if photographs are real or AI generated.
          Through playing this interactive game, those of all ages learn how to detect features unique to AI generated images
          and appreciate the application of this technology while recognizing its downfalls.
        </p>
        <h2>Why We Made This</h2>
        <p>
          Generative AI continues to get better every day. AI content is becoming increasingly more realistic,
          and it's important for the general public to be able to recognize signs of an image being AI generated. While projects like Google Deepmind's SynthID set out to solve this issue using complex algorithms, it's also important that we educate people on how to make their own decisions without relying on technology.
        </p>
        <h3>Credits</h3>
        <p>
          Made with ❤️ Sam Bederman, Srikar Yalam, Alex Zhang, and Alan Zhou for TAMUhack X.

        </p>
      </div>
      <a onClick={() => location.href = "/"}>
        <Arrow />
      </a>
    </>
  )
}

export default About;