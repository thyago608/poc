import { Post } from "../../components/Post";

export default function Home(){
    return(
        <main id="main">
            <article>
                <Post title="Qual banco de dados utilizar em seu projeto ?"/>
                <Post title="O que é PWA ?"/>
                <Post title="Configurando o PWA Studio em seu projeto"/>
                <Post title="O que é React?"/>
                <Post title="Como tornar seu aplicativo CRA em PWA"/>
            </article>
        </main>
    );
}