export default function Education() {
  return (
    <section id='education' className='my-8 bg-gray-400/30 p-2 rounded-[12px]'>
      <div className='w-[60vw]'>
        <h2 className='text-3xl mb-2 font-extrabold'>Education</h2>
        <div>
          <h3 className='text-lg font-bold'>California Insitute of Technology</h3>
          <p className='flex justify-between'><span>Bachelor of Science, Computer Science</span><span className='italic'>Expected Graduation: June 2026</span></p>
          <h4 className='text-lg font-bold'>Relevant Coursework</h4>
          <h5 className='font-bold'>Graduate-level Courses:</h5>
            <p>
              Deep Learning Systems, Relational Databases, Web Development, Machine Learning and Data Mining,
              Operating Systems, Compilers, Network Architecture, Software Engineering
            </p>
          <h5 className='font-bold'>Undergraduate-level Courses:</h5>
            <p>
              Object-Oriented Programming, Data Structures, Algorithms, Software Design, Systems Programming,
              Differential Equations, Probability Models, Discrete Math, Integrated Circuits, Functional Programming
            </p>
        </div>
      </div>
    </section>
  );
}