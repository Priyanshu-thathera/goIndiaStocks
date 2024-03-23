import MarketCard from "./MarketCard";
import MarketData from "../Data/MarketStories.json"
const Market = ()=> {
    return (
        <>
        <div className="content px-3">
        <div className="bg-slate-200 text-red-400 font-bold	px-2 py-1 mb-4 mt-2 w-fit whitespace-nowrap hidden sm:block">
          <h3>Market Stories </h3>
        </div>

        <div className="">{
          MarketData.map((el,index)=>
          <MarketCard
          key={index}
          title={el.title}
          desc={el.desc}
          />)
        }
          
        </div>
      </div>
        </>
    )
}

export default Market;