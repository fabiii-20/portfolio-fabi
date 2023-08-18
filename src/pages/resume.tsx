import Bar from "@/components/Bar";
import { languages, tools } from "@/../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-light">College of Engineering Trivandrum (2018-2022)</p>
            <p className="my-3">
              I have completed my B.tech in Computer Science Engineering
              from College of Engineering Trivandrum.
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">ENGINEER</h5>
            <span className="flex justify-between">
            <p className="font-semibold">Tata Elxsi</p>
            <p className="my-2 font-light text-xs">Sep 2022 - Aug 2023</p>
            </span>
            <p className="my-3 font-light text-xs">Created and implented electrical architecture for the vehicles using vector
PREEvision tool
• Supported on the customization of the PREEvision application using Java.</p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold">FRONTEND DEVELOPER & UI/UX DESIGNER</h5>
            <span className="flex justify-between">
            <p className="font-semibold">Klashra Tours & Travels</p>
            <p className="my-2 font-light text-xs">May 2023 - Jul 2023</p>
            </span>
            <p className="my-3 font-light text-xs">Created wireframes, mockups, and interactive prototypes to communicate
design concepts effectively using Figma.
• Implemented responsive and interactive user interfaces using ReactJs
,HTML,Bootstrap CSS and Javascript.</p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold">UI/UX DESIGNER</h5>
            <span className="flex justify-between">
            <p className="font-semibold">QIB Logistics Inc</p>
            <p className="my-2 font-light text-xs">Jun 2021 - Sep 2021</p>
            </span>
            <p className="my-3 font-light text-xs">Created the wireframe, prototype and mockup of the web applivation
using AdobeXd.</p>
          </div>
          <div className="">
            <h5 className="my-2 text-xl font-bold">FRONTEND DEVELOPER & UI/UX DESIGN INTERN</h5>
            <span className="flex justify-between">
            <p className="font-semibold">Infospica</p>
            <p className="my-2 font-light text-xs">Jul 2019 - Feb 2020</p>
            </span>
            <p className="my-3 font-light text-xs">Worked on Figma, React</p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;