import React from 'react';

function About(props){
    return(
        <div className="container py-5 px-5">
            <div className="row mt-5">
                <div className="col-md">
                    <p>
                        Merhabalar,<br/> ben Cem Nisan.
                        <br/>
                        <br/>
                        Bu proje Kodluyoruz Derneği tarafından bize sunulan Adana-FullStack Web Bootcamp'i tarafından verilen ödev üzerine kodlanmıştır.

                    </p> 
                    <h1 style={{color:'white'}}>-Projenin Yüzeysel Kısmı <br/></h1>
                    <p>Proje,sinema eleştirisi ve makaleler üzerine kurgulanmıştır. <br/> İlk etapta verilerimiz API aracılığı ile sağlanmıştır.<br/></p>
                    
                    <h2>-Proje İçeriğinin Detaylandırılması <br/></h2>
                    <p>
                        Navbar kısmı ve Router kısmı verilerini json 
                        formatında oluşturulan bilgilerden almaktadır. 
                        Bu sayede kendimi tekrarlamadan bu kısımları oluşturdum.
                        <br></br>
                        <br></br>
                        Article kısmında API'dan gelen tüm flimleri gösterdim ve flim arama butonu oluşturdum.
                        <br/>
                        <br/>
                        Article kısmında API'dan gelen tüm flimleri gösterdim ve flim arama butonu oluşturdum.
                        <br></br>
                        <br/>
                        React'ın slugify kütüphanesini kullanarak api'dan gelen flim isimlerini slug'a çevirdim. Bu sayede flim arama ve detay sayfalarını kolayca oluşturabildim.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default About