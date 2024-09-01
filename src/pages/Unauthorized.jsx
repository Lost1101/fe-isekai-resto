import Background from "../component/Background";
import forbidden from '../component/img/forbidden.png'

export default function Unauthorized() {
  return (
    <Background>
        <img className="w-1/2 m-auto pt-20" src={forbidden} alt="" />
        <p className="text-center text-white">You have no access to see this page :(</p>
    </Background>
  );
}