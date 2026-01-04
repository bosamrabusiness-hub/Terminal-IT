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
        <h2 className="display-heading pt-12 md:pt-0">
          Explain <br /> better <br /> stories
        </h2>
        <p className="text-medium">
          Elevate your projects with a focus on{' '}
          <b>User-Centered Design and the design thinking process.</b> I
          specialize in creating solutions that prioritize user needs and drive
          results.
        </p>
        <p className="text-medium">
          <b>Through an agile design process</b> grounded in empathy and
          collaboration, I guide projects from ideation to iteration, ensuring
          each step brings us closer to a solution that truly resonates.
        </p>
      </div>
    </section>
  );
};

export default Process;
