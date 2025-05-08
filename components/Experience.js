
import experience from '@/data/experience.json';

function Experience() {
  return (
    <div className="flex flex-row relative py-20">
        <div className="flex flex-row mx-auto left-0 right-0 gap-20 relative">
            <div className="basis-1/3 text-left">
                <h1 className="text-6xl font-bold text-light"> Experience </h1>
                <p className="text-gray-500 text-xl mt-5"> Embark on a journey through my professional career, where each role has been a stepping stone towards growth and expertise. From early experiences to present accomplishments, I've cultivated a rich tapestry of skills and achievements. </p>
                <img src="/ASSETS/crystal-001.png"/>
                <img className="absolute blur-lg -top-3/4 isolate -left-1/2" src="/ASSETS/crystal-001.png"/>
            </div>
            <div className="basis-2/3 text-left flex flex-col gap-10">
                {
                 experience.map(function (object, i ) {

                    return (
                        <div className="rounded-xl flex flex-row" key={i}>
                            <div className="date basis-1/3 text=right">
                                
                                <h2 className="font-bold text-light text-right pr-10"> {object.timeline} </h2>

                            </div>
                            <div className="date basis-2/3 text-light">
                                <h2 className="font-bold text-lg"> <span className="text-lgreen"> {object.current_position.split('•', 1)} </span> • { object.current_position.split("•",2)} </h2>
                                
                                {object.past_position.map(function(pos, p) {
                                    
                                    return (<h2 key={p} className="text-lg text-gray-500"> {pos} </h2> )
                                })}
                            
        
                                <p className="my-3">{object.description}</p>
        
                                <ul className="list-none flex flex-row gap-2 mt-5 flex-wrap">
                                    {
                                        object.stack.map(function(obj, x) {
                                            return <li className="bg-dgreen text-lgreen rounded-full px-3 py-2 font-bold w-auto float-left">  {obj} </li>
                                            
                                        })
                                    }
                                </ul>
        
                            </div>
                        </div>
                    )
                 })   
                }

                {/* <div className="rounded-xl flex flex-row">
                    <div className="date basis-1/3">
                        <h2 className="font-bold text-light text-right pr-10"> 2023 - PRESENT </h2>
                    </div>
                    <div className="date basis-2/3 text-light">
                        <h2 className="font-bold text-lg"> <span className="text-lgreen"> Web Developer </span> • Slim Mekni Marketing Services </h2>
                        <h2 className="text-lg text-gray-500"> Video Editor <br/> Graphics Designer </h2>

                        <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus aliquet diam vitae hendrerit. Nunc interdum mauris et commodo cursus. In et velit in velit malesuada rhoncus. Vivamus in neque diam. Pellentesque sagittis, nunc in tempor pulvinar, tellus ex malesuada ex, ut posuere ligula arcu quis nunc.</p>

                        <ul className="list-none flex flex-row gap-2 mt-5 flex-wrap">
                            <li className="bg-dgreen text-lgreen rounded-full px-3 py-2 font-bold w-auto float-left">  NodeJS </li>
                            <li className="bg-dgreen text-lgreen rounded-full px-3 py-2 font-bold w-auto float-left">  Javascript </li>
                            <li className="bg-dgreen text-lgreen rounded-full px-3 py-2 font-bold w-auto float-left">  HTML & SASS </li>
                            <li className="bg-dgreen text-lgreen rounded-full px-3 py-2 font-bold w-auto float-left">  ReactJS </li>
                            <li className="bg-dgreen text-lgreen rounded-full px-3 py-2 font-bold w-auto float-left">  Photoshop </li>
                            <li className="bg-dgreen text-lgreen rounded-full px-3 py-2 font-bold w-auto float-left">  Illustrator </li>
                            <li className="bg-dgreen text-lgreen rounded-full px-3 py-2 font-bold w-auto float-left">  After Effects </li>
                            <li className="bg-dgreen text-lgreen rounded-full px-3 py-2 font-bold w-auto float-left">  Premiere </li>
                        </ul>

                    </div>
                </div> */}


            </div>
        
        </div>
    </div>
  )
}

export default Experience
