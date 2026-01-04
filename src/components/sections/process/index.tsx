import Image from 'next/image';

const Process = () => {
  return (
    <section
      className="
        bg-mainbody-weg
        flex flex-col            
        p-4                  
        md:gap-[30px]          
        md:flex md:flex-row    
        lg:gap-[60px]         
        md:py-20                
        md:justify-center       
      "
    >
      {/* IMAGE BLOCK */}
      <div
        className="
          md:sticky md:top-[3.75rem] 
          lg:max-w-[380px]            
          lg:flex-shrink-0            
          h-[30.3125rem]
          w-full
        "
      >
        <div className="relative h-full w-full">
          <Image
            fill
            sizes="(max-width: 1024px) 100vw, 380px"
            src="/design-process.png"
            alt="design process"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* TEXT BLOCK */}
      <div
        className="
          flex flex-col
          gap-5
          md:gap-10
          lg:gap-10
          md:max-w-[380px]  
          lg:max-w-[500px]
           mb-[200px]    
          md:mb-[350px]   
          lg:mb-[500px]   
        "
      >
        <h2 className="pt-12 md:pt-0 text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold whitespace-nowrap">
          Our Story
        </h2>
        <p className="text-medium leading-relaxed">
          <b>Terminal was founded in 2025</b> with a simple yet ambitious vision:
          to <b>bridge the gap between cutting-edge technology</b> and real-world
          business needs.<br />
          What started as a small team of passionate developers has grown into a
          <b> full-service digital agency</b>.<br />
          Today, we continue to push boundaries, embrace new technologies, and
          maintain our commitment to <b>delivering exceptional results</b>.<br />
          Our success is measured not just by the code we write, but by the
          <b> impact we create</b> for our clients and their users.
        </p>
      </div>
    </section>
  );
};

export default Process;
