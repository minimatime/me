import Image from "next/image";

export default function Home() {
    return (
      <div className="content">
        <div className="flex justify-between p-16">
          <div className="flex flex-col gap-4">
            <p className="role">FULL-STACK DEVELOPER</p>
            <p className="role">PRODUCT DESIGNER</p>
            <p className="role">MULTIMEDIA ARTIST</p>
          </div>
          <Image className="h-24" src="/in-progress-logo.svg" alt="in progress logo" width={100} height={100}/>
        </div>
        <div className="flex flex-col items-left pl-32 gap-4">
          <h1>hi, i&apos;m natasha!</h1>
          <h2>I am interested in using creative computing to build communities + collaborative tools that tell stories and change systems.</h2>
          <p>I am also:</p>
          <ul className="list-disc">
            <li>an incoming master&apos;s student (human-computer interaction) @ georgia tech</li>
            <li>stewarding witech and its 25 global chapters</li>
            <li>lead vocalist for heartstrings</li>
            <li>getting into cooking and calisthenics!</li>
          </ul>
        </div>
        <footer className="absolute inset-x-0 bottom-0 gap-2 flex items-center justify-center p-7">
          <a href="mailto:nvalluri3@gatech.edu"><p>EMAIL</p></a>
          <Image className="w-2 h-2" src="/diamond.svg" alt="diamond-decoration" width={100} height={100}/>
          <a href="https://mini-studio.netlify.app/" target="_blank"><p>OLD SITE</p></a>
          <Image className="w-2 h-2" src="/diamond.svg" alt="diamond-decoration" width={100} height={100}/>
          <a href="https://www.linkedin.com/in/natashavalluri/" target="_blank"><p>LINKEDIN</p></a>
          <Image className="w-2 h-2" src="/diamond.svg" alt="diamond-decoration" width={100} height={100}/>
          <a href="https://github.com/minimatime/resume-cv/blob/main/Natasha_Valluri_Resume_Internship_HCI.pdf" target="_blank"><p>RESUME</p></a>
          <Image className="w-2 h-2" src="/diamond.svg" alt="diamond-decoration" width={100} height={100}/>
          <a href="https://github.com/minimatime/resume-cv/blob/main/Natasha%20Valluri%20-%20CV%20-%20Apr25.pdf" target="_blank"><p>CV</p></a>
        </footer>
      </div>
  );
}
