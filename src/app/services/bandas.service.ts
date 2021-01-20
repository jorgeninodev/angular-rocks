import { Injectable } from '@angular/core';
import { Banda } from '../model/banda';


@Injectable({
  providedIn: 'root'
})
export class BandasService {

  private datos:Array<Banda> =[{
    id:0,
    nombre:'The Rolling Stone',
    origen:'Londres, Inglaterra',
    historia: `The Rolling Stones es una banda británica de rock originaria de Londres. La banda se formó en abril de 19622​ por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts e Ian Stewart.Brian Jones fue despedido en junio de 1969, falleciendo tres semanas después, siendo reemplazado por el guitarrista Mick Taylor, que dejaría el grupo en 1975 y sería a su vez reemplazado por Ronnie Wood. Con el retiro de Bill Wyman en 1993 se incluyó al bajista Darryl Jones que, aunque toca con la banda desde la grabación del álbum Voodoo Lounge en 1994, no es un miembro oficial.
              Están considerados como una de las más grandes e influyentes bandas de toda la historia del rock, siendo una de las agrupaciones que sentó las bases del rock contemporáneo. Contando desde sus inicios con el favor de la crítica, algunos de sus materiales están considerados de los mejores de todos los tiempos; entre ellos destacan Beggars Banquet (1968), Let It Bleed (1969), Sticky Fingers (1971) y quizá su mejor obra, Exile on Main St. (1972).nota 1​ En 1989 fueron incluidos en el Salón de la Fama del Rock and Roll, y en 2004 la revista estadounidense Rolling Stone los colocó en el puesto n.º 4 en su lista de Los 50 mejores artistas de todos los tiempos.11​ Ningún grupo de rock hasta la fecha ha sostenido tan duradera y todavía mundialmente reconocida trayectoria como The Rolling Stones; con Jagger, Richards y Watts como miembros fundadores en activo, continúan siendo la banda más longeva de la historia del rock.`,
    miembros: 'Mick Jagger,Keith Richards,Charlie Watts,Ronnie Wood',
    periodo:'1962-presente',
    sitioWeb:'http://www.rollingstones.com',
    foto:'assets/images/rollingStone.jpg',
    video:'https://www.youtube.com/embed/ZRXGsPBUV5g',
  },
  {
    id:1,
    nombre:'Led Zeppelin',
    origen:'Londres, Inglaterra',
    historia:`Led Zeppelin fue un grupo británico de hard rock fundado en 1968 por el guitarrista Jimmy Page, quien había pertenecido a The Yardbirds. La banda estuvo integrada por John Paul Jones como bajista y teclista, el vocalista Robert Plant y John Bonham a la batería (que había coincidido con Plant en The Band of Joy).
              Led Zeppelin presentó elementos de un amplio espectro de influencias, como el blues, el rock and roll, el soul, la música celta, la música india, el folk, y el country.
              Más de treinta años después de la disgregación de la banda en 1980, la música de Led Zeppelin continúa vendiéndose, disfruta de una amplia difusión radiofónica, y ha demostrado ser una de las bandas más influyentes en la música rock. Hasta la fecha, ha vendido más de 300 millones de álbumes en el mundo, incluidos 111 millones sólo en los Estados Unidos,2​. Es, junto a los Beatles, la banda con más discos de diamante de la historia de la música (otorgados cada diez millones de ventas en EE. UU.). Los discos con esta certificación son: Led Zeppelin IV (23 millones), Physical Graffiti (15 millones), Led Zeppelin II (12 millones), Houses of the Holy (11 millones) , Led Zeppelin I (10 millones) y Box Set (10 millones). En 2004, la revista Rolling Stone los clasificó en el número 14 en su lista de los «100 artistas más grandes de todos los tiempos».`,
    miembros:'Jimmy Page,Robert Plant,John Paul Jones,John Bonham (fallecido)',
    periodo:'1968-1980',
    sitioWeb:'http://www.ledzeppelin.com',
    foto:'assets/images/ledZeppelin.jpeg',
    video:'https://www.youtube.com/embed/xbhCPt6PZIU'
  },
  {
    id:2,
    nombre:'Queen',
    origen:'Londres,Inglaterra',
    historia:`Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún se considera activa.
              El grupo gozó de un gran éxito en el Reino Unido con álbumes como Sheer Heart Attack (1974) y A Night at the Opera (1975). Este último llamó la atención internacionalmente, en especial por el sencillo "Bohemian Rhapsody", y colocó a Queen en un primer plano de la escena musical. Tuvieron una significativa repercusión en Estados Unidos a finales de los años 1970, ya con un numeroso repertorio de éxitos.5​ A nivel artístico, se ha destacado su diversidad musical, sus arreglos en múltiples capas y sus armonías vocales. Es considerada una banda de gran influencia en el desarrollo del hard rock y el heavy metal, incorporando elementos del glam rock, rock progresivo, folk, ópera, blues y pop. Fue una de las primeras agrupaciones musicales en hacer de sus conciertos espectáculos muy vistosos mediante el uso de bombas de humo, flashpots o innovadores sistemas de luces móviles, además de promover la participación del público en los mismos, contribuyendo así al auge del arena rock.6​ La crítica ha señalado el carisma de Freddie Mercury como una parte fundamental de sus presentaciones.7​ A este respecto, habitualmente se han reconocido actuaciones como las del Live Aid en 1985 o el concierto del estadio de Wembley en 1986 como dos de los mejores recitales de rock de la historia.8​9​10​ Aunque el cuarteto normalmente gozó de una gran popularidad y éxito comercial, en su momento una parte de la crítica no les tomó en serio, como por ejemplo cuando en la publicación Rolling Stone se criticó el álbum Jazz llamándolo "fascista".`,
    miembros:'Freddie Mercury(fallecido),Brian May,Roger Taylor,John Deacon',
    periodo:'1970-presente',
    sitioWeb:'http://www.queenonline.com/es/',
    foto:'assets/images/Queen.jpg',
    video:'https://www.youtube.com/embed/MEEJOZkmIxU'
  },
  {
    id:3,
    nombre:'Pink Floyd',
    origen:'Londres,Inglaterra',
    historia:`Pink Floyd fue una banda de rock británica, fundada en Londres en 1965. Es considerada un icono cultural del siglo xx y una de las bandas más influyentes y aclamadas en la historia de la música, que obtuvo gran popularidad gracias a su música psicodélica que evolucionó hacia el rock progresivo y rock sinfónico con el paso del tiempo. Es conocida por sus canciones de alto contenido filosófico, la experimentación sónica, las innovadoras portadas de sus discos y sus elaborados espectáculos en vivo. Sus ventas sobrepasan los 300 millones de álbumes vendidos en todo el mundo,4​5​ 97,5 millones de ellos solamente en los Estados Unidos.6​
              Inicialmente el grupo estaba formado por el batería Nick Mason, el teclista y vocalista Richard Wright, el bajista y vocalista Roger Waters y el guitarrista y vocalista principal Syd Barrett, quien se convirtió en el primer líder de la banda. Bob Klose fue guitarrista inicialmente por un corto tiempo, pero no llegó a aparecer en ningún disco. El errático e impredecible comportamiento de Barrett, causado por el excesivo consumo de drogas, especialmente LSD,1​ hizo que su amigo David Gilmour se integrara al grupo en diciembre de 1967 y que quedase definida la formación clásica del grupo tras la marcha de Barrett en abril de 1968.`,
    miembros:'David Gilmour,Nick Mason, Richard Wright (fallecido), Syd Barrett (fallecido), Roger WatersBob Klose',
    periodo:'1965-1995',
    sitioWeb:'http://www.pinkfloyd.com/',
    foto:'assets/images/pinkFloyd.jpg',
    video:'https://www.youtube.com/embed/xBQsQoGodPY'
  },
  {
    id:4,
    nombre:'Deep Purple',
    origen:'Hertford, Inglaterra',
    historia:`Deep Purple es una banda británica de hard rock formada en 1968 en Hertford, Reino Unido. Está considerada como una de las pioneras de dicho subgénero, y los pioneros del heavy metal junto a Led Zeppelin y Black Sabbath. Su música ha incorporado elementos del rock progresivo, rock sinfónico, rock psicodélico, blues rock y de la música clásica y Britpop. Deep Purple ha vendido más de 120 millones de discos en todo el mundo.2​
              La banda ha sufrido múltiples cambios en su formación a lo largo de las décadas, aunque permaneció inactiva desde julio de 1976 hasta su reunión, en abril de 1984. Sus cuatro primeras alineaciones son a menudo etiquetadas como "Mark I", "II", "III" y "IV". La "Mark II", formada por Ian Gillan (voz), Ritchie Blackmore (guitarra), Jon Lord (teclados), Ian Paice (batería) y Roger Glover (bajo), es considerada la alineación más exitosa, y la que mayores ventas ha cosechado, la cual se mantuvo en activo desde 1969 a 1973, de 1984 a 1989, y nuevamente de 1992 a 1993, cuando la relación entre Blackmore y el resto de los músicos se volvió insostenible. Su alineación actual, que cuenta con Steve Morse en lugar de Blackmore y con Don Airey en lugar del fallecido Jon Lord, lleva en activo desde 2002.`,
    miembros:'Ian Paice, Ian Gillan, Roger Glover, Steve Morse, Don Airey',
    periodo:'1968-1976 , 1984-presente',
    sitioWeb:'http://www.deeppurple.com/',
    foto:'assets/images/deepPurple.jpg',
    video:'https://www.youtube.com/embed/ikGyZh0VbPQ'
  },
  {
    id:5,
    nombre:'AC/DC',
    origen:'Sidney, Australia',
    historia:`AC/DC es un grupo de hard rock australiano formado en 1973 en Sídney, Australia, por los hermanos escoceses Malcolm y Angus Young.3​4​
              Sus álbumes se han vendido en un total estimado de 200 millones de copias,5​6​ embarcándose en giras multitudinarias por todo el mundo, y sus éxitos han musicalizado varias producciones cinematográficas sobresalientes.7​8​9​10​ Son famosas sus actuaciones en vivo, resultando vibrantes y exultantes espectáculos de primer orden.11​ Mucho de ello se debe al extravagante estilo de su guitarrista principal y símbolo visual, Angus Young, quien asume el rol de agitador musical durante los conciertos, gracias a sus dinámicos y adrenalínicos despliegues escénicos uniformado de colegial callejero.12​ Al comienzo, los circuitos de pubs australianos fueron testigo de los primeros meses de vida del proyecto, tiempos por los cuales sufrieron diversos cambios en su alineación.13​14​ En 1974, la llegada del cantante Bon Scott, se convertiría en pieza clave del éxito del grupo. Su presencia en escena, junto a los hermanos Young, lo convirtió en uno de los personajes más carismáticos de la historia del rock.15​16​17​ La formación se estabilizaría con Mark Evans (bajo) y Phil Rudd (batería).`,
    miembros:'Brian Johnson,Angus Young, Stevie Young, Phil Rudd',
    periodo:'1973-presente',
    sitioWeb:'http://www.acdc.com',
    foto:'assets/images/acdc.jpg',
    video:'https://www.youtube.com/embed/n_GFN3a0yj0'
  },
  {
    id:6,
    nombre:'Ramones',
    origen:'Nueva York, Estados Unidos',
    historia:`Ramones fue una banda de punk formada en Forest Hills, en el distrito de Queens (Nueva York, Estados Unidos) en 1974, y disuelta veintidós años más tarde, en 1996.
             Pioneros y líderes del naciente punk,1​2​ cimentaron las bases de este género musical con composiciones simples, minimalistas, repetitivas y letras muy simples o incluso sin sentido, en clara oposición a la pomposidad y la fastuosidad de las bandas que triunfaban en el mercado de los años 1970:3​4​ con sus largos solos de guitarra, las complejas canciones de rock progresivo y sus enigmáticas letras.5​ Su sonido se caracteriza por ser rápido y directo, con influencias del rockabilly de los años 1950, el surf rock, The Beatles, The Who, The Velvet Underground, las bandas de chicas de los años 1960 como The Shangri-Las y el garage protopunk de MC5 y The Stooges.6​
             Ramones lideró la primera ola del punk en Nueva York, compartiendo el escenario del mítico club CBGB con otras bandas de punk como Blondie, Johnny Thunders and the Heartbreakers, Richard Hell & The Voidoids entre otros, de protopunk como Patti Smith, Television y de new wave como Talking Heads entre otros, y sirviendo de inspiración para la gran mayoría de las bandas de punk surgidas en la década de 1970 tanto de EE. UU. como en el Reino Unido.7​ Siendo una de las bandas más importantes de la historia del rock, su influencia se percibe en casi todas las formaciones de punk posteriores.`,
    miembros:'Joey Ramone (fallecido), Johnny Ramone (fallecido), Marky Ramone,Elvis Ramone,C. J. Ramone,Dee Dee Ramone, Tommy Ramone (fallecido), Richie Ramone',
    periodo:'1974-1996',
    sitioWeb:'https://www.ramones.com',
    foto:'assets/images/ramones.jpg',
    video:'https://www.youtube.com/embed/YpL0qAEyO60'

  },
  {
    id:7,
    nombre:'Kiss',
    origen:'Nueva York, Estados Unidos',
    historia:`KISS es una banda estadounidense de rock formada en Nueva York en enero de 1973 por el bajista Gene Simmons y el guitarrista Paul Stanley, a los que más tarde se unirían el batería Peter Criss y el guitarrista Ace Frehley.2​ Conocidos por su maquillaje facial y sus extravagantes trajes, el grupo se dio a conocer al público a mediados de los años 1970 gracias a sus actuaciones en directo, en las que incluían pirotecnia, llamaradas, cañones, baterías elevadoras, guitarras con humo y sangre falsa. Si se tienen en cuenta los álbumes en solitario de 1978, Kiss ha conseguido treinta discos de oro de la RIAA hacia 2015 y se la considera la banda estadounidense que ha recibido más de estas certificaciones.nota 1​4​ El conjunto ha vendido más de 75 millones de álbumes en todo el mundo y veinticinco millones sólo en los Estados Unidos.5​6​ A pesar de no haber alcanzado la primera posición del Billboard 200, ha situado veintiséis de sus trabajos entre los cuarenta primeros puestos.7​ Desde su formación, los miembros de Kiss asumieron personalidades acordes con los maquillajes y vestimenta que llevaban, así Simmons asumió el rol de «Demon», Stanley el de «Starchild», Criss el de «Catman» y Frehley el de «Space Ace» o «Spaceman».
              Sus tres primeros álbumes de estudio apenas tuvieron repercusión y tuvo que ser con el lanzamiento de Alive!, un disco en directo, que la banda consiguiera fama y popularidad.2​ Sus siguientes trabajos, entre los que destacan Destroyer y Love Gun, aumentaron la popularidad del grupo y consiguieron varias certificaciones de platino.3​ Después de que cada miembro de la banda publicara un álbum en solitario y rodar una película, las tensiones dentro del grupo aumentaron, lo que ocasionó la marcha de Criss y posteriormente la de Frehley. Tras la salida de dos de sus miembros fundadores —Eric Carr y Vinnie Vincent reemplazaron a Criss y Frehley y asumieron las personalidades de «The Fox» y «The Wizard», respectivamente— y publicar algunos álbumes que no tuvieron el número de ventas esperadas, como Music from "The Elder" y Creatures of the Night, en 1983, Kiss decidió abandonar el maquillaje y orientar su estilo musical hacia el glam metal. En la década de 1990 se produjo la reunión de la formación con sus respectivos maquillajes, aunque con la llegada del nuevo milenio, Frehley y Criss volvieron a dejar la banda. Simmons y Stanley decidieron continuar con el batería Eric Singer y el guitarrista Tommy Thayer, quienes asumieron las personalidades de «Catman» y «Spaceman», respectivamente.`,
    miembros:'Paul Stanley, Gene Simmons, Eric Singer, Tommy Thayer',
    periodo:'1973-presente',
    sitioWeb:'http://www.kissonline.com',
    foto:'assets/images/kiss.jpg',
    video:'https://www.youtube.com/embed/67KkjVMllS0'

  }]
  private bandas:Array<Banda> = [];

  constructor() {

    this.bandas = [...this.datos];
  }

//Regresa el arreglo completo de bandas
  obtenerBandas():Array<Banda>{
    return this.bandas;
  }
//Regresa una banda
  obtenerBanda(id:number){
    return this.bandas.find(banda => banda.id === id);
  }

  //Buscar una Banda
  buscarBanda(texto:string):Array<Banda>{

    let arrBandas:Array<Banda> = [];
    texto = texto.toLowerCase();
    for(let banda of this.bandas){
      let nombre:string = banda.nombre.toLocaleLowerCase();

      if(nombre.indexOf(texto)>=0){
        arrBandas.push(banda);
      }
    }
    return arrBandas;
  }

//Agregar una Banda
  agregarBanda(banda:Banda){

    this.bandas.push(banda);
  }
//Borrar una Banda
  borrarBanda(id:number){
    let arreglo:Array<Banda> =[]
    arreglo = this.bandas.filter(banda => banda.id!==id);
    this.bandas = [...arreglo];
  }
}




