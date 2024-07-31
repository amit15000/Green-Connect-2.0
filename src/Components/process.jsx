import "./styles/process.css";
const Process=({image,t1,t2})=>{
   return (<div className="process_com_ab">
           <img src={image} width="100vw"/>
           <span>{t1}</span>
           <span>{t2}</span>
        </div>);
};
export default Process;