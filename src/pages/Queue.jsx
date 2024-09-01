import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import QueueCard from "../component/QueueCard";
import Title from "../component/Title";
import Footer from "../component/Footer";
import Background from "../component/Background";
import { fetchQueue } from "../redux/actions/queueActions";

export default function Queue(){
    const dispatch = useDispatch();
    const queue = useSelector((state) => state.queue.queue);

    useEffect(() => {
        dispatch(fetchQueue())
    }, [dispatch]);

    return(
        <Background>
            <Title content='Queue'/>
            <div className="grid grid-cols-5 grid-rows-1 gap-4 pr-5 pl-5">
            {queue.map((data) => (
                    data.status ? '' : <QueueCard data={data} key={data.id}/>
                ))}
            </div>
            <Footer/>
        </Background>
    )
}