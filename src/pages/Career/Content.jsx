const Content = () => {
  return (
    <div
      className={` w-full  bg-white overflow-hidden relative -mt-5 flex justify-center flex-col gap-5 p-10`}
    >
      <div className="flex font-inter flex-col sm:flex-row max-w-[1300px] mx-auto sm:justify-between justify-center sm:items-start items-center sm:gap-0 gap-10">
        <div className="flex flex-col gap-5 w-[95%] sm:w-[65%]">
          <span>
            At Nexus Pro, we believe in fostering a culture of inclusivity,
            equality, and opportunity. We are committed to providing a
            supportive and collaborative work environment where all team members
            can thrive and reach their full potential. Our team is composed of
            individuals from diverse backgrounds, experiences, and perspectives,
            and we celebrate the unique contributions that each person brings to
            the table.
          </span>
          <span>
            We are dedicated to promoting equal opportunities for all,
            regardless of race, gender, age, sexual orientation, disability, or
            any other characteristic. We believe that diversity is not only a
            source of strength but also essential for innovation and success.
            That's why we actively recruit and welcome talent from all walks of
            life, and we are committed to creating pathways for career
            advancement and professional development for every member of our
            team.
          </span>
          <span>
            At Nexus Pro, we value strong leadership and encourage employees to
            take ownership of their work, embrace challenges, and strive for
            excellence. Our leaders lead by example, fostering a culture of
            transparency, accountability, and continuous improvement. They
            empower their teams to think creatively, collaborate effectively,
            and drive meaningful impact in everything they do.
          </span>
          <span>
            We are always on the lookout for brilliant minds who share our
            passion for innovation, Blockchain technology, and making a positive
            difference in the world. If you are driven, ambitious, and eager to
            join a dynamic team that is shaping the future of digital finance,
            we invite you to explore career opportunities at Nexus Pro.
            Together, we can build something truly extraordinary. Join us and be
            part of the journey towards a brighter tomorrow.
          </span>
        </div>
        <div className="flex flex-col gap-5 w-[95%] sm:w-[30%] items-stretch justify-center">
          <button
            type="button"
            onClick={() => {}}
            className={`rounded-xl w-inherit xl:px-8 px-4 xl:py-4 py-2 flex items-center justify-start gap-3 leading-normal transition duration-150 ease-in-out bg-[#0088CD] text-white hover:shadow-[6px_5px_13px_0px_#0e6a94]`}
          >
            <img
              loading="lazy"
              src={
                process.env.REACT_APP_PUBLIC_URL +
                '/assets/images/career_btn (1)-min.png'
              }
              alt="wing"
              className="h-2/3"
            />
            Jobs Opening
          </button>
          <button
            type="button"
            onClick={() => {}}
            className={`rounded-xl w-inherit xl:px-8 px-4 xl:py-4 py-2 flex items-center justify-start gap-3 leading-normal transition duration-150 ease-in-out bg-[#0088CD] text-white hover:shadow-[6px_5px_13px_0px_#0e6a94]`}
          >
            <img
              loading="lazy"
              src={
                process.env.REACT_APP_PUBLIC_URL +
                '/assets/images/career_btn (2)-min.png'
              }
              alt="wing"
              className="h-2/3"
            />
            Apply for a job
          </button>
          <button
            type="button"
            onClick={() => {}}
            className={`rounded-xl w-inherit xl:px-8 px-4 xl:py-4 py-2 flex items-center justify-start gap-3 leading-normal transition duration-150 ease-in-out bg-[#0088CD] text-white hover:shadow-[6px_5px_13px_0px_#0e6a94]`}
          >
            <img
              loading="lazy"
              src={
                process.env.REACT_APP_PUBLIC_URL +
                '/assets/images/career_btn (3)-min.png'
              }
              alt="wing"
              className="h-2/3"
            />
            Send us your resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
