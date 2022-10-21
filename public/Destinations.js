class Destination{
        
    construtor(name,location){
        this.name=name;
        this.location=location;
        this.description="";
    }

    AddDescription(description){
        this.description=description;
    }
}

let Huasteca = new Destination("Huasteca Potosina en San Luis Potosí","San Luis Potosí");
Huasteca.AddDescription("La Huasteca Potosina es un amplio espacio del estado de San Luis Potosí, que reúne un conjunto de municipios y atracciones, como si estuvieras en un pequeño país, presto a disfrutar de todos los encantos posibles. Su epicentro es Ciudad Valles, donde está la mayor capacidad hotelera. Cerca está Micos, con sus hermosas cascadas escalonadas. En Aquismón te espera el Sótano de las Golondrinas, un abismo de vértigo de más de 500 metros de profundidad, repleto de aves. En el municipio de Xilitla la gran atracción es el Jardín Surrealista de Sir Edward James.");

let Bacalar = new Destination("Bacalar","Quitana Roo");
Bacalar.AddDescription("La también llamada Laguna de los Siete Colores es impactante por su belleza, sus rápidos, sus estromatolitos y muy especialmente por sus embrujadores cenotes.La laguna es también sitio de moda para la motonáutica y otros divertimientos acuáticos. Fuera del agua, la localidad de Bacalar cuenta con otros sitios de interés turístico, como el Fuerte de San Felipe Neri y el Museo de la Guerra de Castas.");

let CascadasHierve = new Destination("Cascadas de Hierve el Agua","Oaxaca");
CascadasHierve.AddDescription("Pueda que de entrada el nombre te ponga a pensar en unos saltos de agua humeante, pero esta maravilla natural del estado de Oaxaca es un grupo de cascadas petrificadas.Las cataratas pétreas se formaron a lo largo de los milenios, mediante el goteo del agua saturada de carbonatos, de la misma manera que se erigen las estalactitas y estalagmitas en las cavernas. El fascinante lugar está la población oaxaqueña de San Isidro Roaguía y es también una plaza arqueológica de interés, por un sistema zapoteca de irrigación y terrazas.");

let Xilitla = new Destination("Pozas de Xilitla","San Luis Potosí");
Xilitla.AddDescription("Conjugando espléndidamente la obra del hombre con la de la naturaleza, en el municipio potosino de Xilitla se encuentra un espectacular conjunto artístico, realizado por el acaudalado escultor escocés del siglo XX, Edward Jones.El conglomerado arquitectónico y escultórico se encuentra en un hermoso predio de más de 300 mil metros cuadrados y las piezas artísticas están admirablemente integradas a cascadas, pozas, jardines y otros componentes del entorno natural. Entre estas destacan La escalera al cielo, La recámara con techo en forma de ballena y  LaCasa de los Peristilos, por nombrar solo tres.");

let IslasMarietas = new Destination("Islas Marietas","Nayarit");
IslasMarietas.AddDescription("Son dos islas nayaritas deshabitadas, llamadas Isla Redonda e Isla Larga. Son frecuentadas por sus hermosas playas, ideales para el buceo, el snorkel y la observación de la vida submarina.También son visitadas por los observadores de aves, particularmente para ver a una no muy común, el alcatraz patas azules.");

let PlayaDelCarmen = new Destination("Playa del Carmen","Quintana Roo");
PlayaDelCarmen.AddDescription("La Riviera Maya, en el Caribe mexicano, es uno de los principales corredores mundiales del turismo de playa y su corazón es Playa del Carmen.La ciudad del estado de Quintana Roo, frente a la isla de Cozumel, cuenta con una infraestructura hotelera de primer orden y en permanente expansión, playas paradisíacas, parques ecológicos y excelentes restaurantes en los que disfrutar los frescos pescados y mariscos caribeños y la gastronomía internacional.");

let AguaAzul = new Destination("Cascadas Agua Azul","Chiapas");
AguaAzul.AddDescription("Los ríos Otulún, Shumuljá y Tulijá, en el municipio chiapaneco de Tumbalá, forman acantilados verticales en sus cañones, por los que se desprenden unas bellas cataratas blaquiazules, las cascadas Agua Azul.La bonita tonalidad azulada proviene de los carbonatos que se van disolviendo en el agua a lo largo de su curso. El marco paradisíaco del lugar lo complementa el intrincado follaje circundante. El acceso al sitio se encuentra en la carretera que une a San Cristóbal de las Casas con Palenque.");

let MariposasMonarcas  = new Destination("Santuario de la Mariposa Monarca","Michoacán");
MariposasMonarcas.AddDescription("La mariposa Monarca, la bella especie de característicos colores naranja y negro, ha sobrevivido en América del Norte gracias a un largo viaje de reposo que tiene a México como punto de llegada.Es el insecto que realiza el movimiento migratorio más largo, viajando 4.000 kilómetros para escapar del crudo invierno canadiense.En Michoacán tiene dos grandes santuarios, la montaña de El Rosario y Sierra Chincua. Los observadores de la vida silvestre se las arreglan para ver a estos curiosos insectos que se hospedan en México entre noviembre y marzo.");

let PalenqueChiapas  = new Destination("Palenque en Chiapas","Chiapas");
PalenqueChiapas.AddDescription("Es una ciudad de origen maya en el estado de Chiapas, cuyos principales atractivos son sus yacimientos arqueológicos y sus hermosas cascadas. Buena parte de la zona arqueológica está aún por desenterrar, permaneciendo sepultada en la selva, pero lo que se ha develado es impresionante.Las principales edificaciones puestas al descubierto son El Observatorio, el Templo del Sol, el Templo de las Inscripciones, el Templo del Conde, el Templo de La Calavera, el Templo de La Cruz y El Palacio. En varios de ellos hay magníficos bajo relieves y otros elementos decorativos. Palenque es también famoso por sus caídas de agua, entre las que se encuentran Misol-Ha, Agua Azul y Agua Clara.");

let CatedralDeGuadalupe = new Destination("Zócalo y Catedral de Nuestra Señora de Guadalupe","Ciudad de México");
CatedralDeGuadalupe.AddDescription("La Plaza de la Constitución, nombre oficial del famoso zócalo de Ciudad de México, es el centro neurálgico del país. Es el lugar de todas las celebraciones magnas y está rodeado de las edificaciones más emblemáticas de la nación.La más importante para los mexicanos es la Catedral de Nuestra Señora de Guadalupe, el templo más grande de América.Su construcción fue iniciada en el siglo XVI y se estuvo hundiendo lenta pero progresivamente. Afortunadamente, tras complejos trabajos de estabilización, este Patrimonio de la Humanidad quedó libre de riesgos.");

let BellasArtes = new Destination("Palacio de Bellas Artes","Ciudad de México");
BellasArtes.AddDescription("La majestuosa edificación en estilos modernista y art decó es el símbolo de la alta cultura, no solo de Ciudad de  México, sino de todo el país. Fue inaugurado en 1918, como máxima joya en la conmemoración del primer centenario de la Independencia. Cuenta con un museo y en su principal sala de espectáculos se presentan funciones de ballet, teatro y música. Sus paredes están decoradas con murales de Rufino Tamayo, José Clemente Orozco, David Alfaro Siqueiros, Diego Rivera y otros grandes pintores mexicanos.");

let PlazaTresCulturas = new Destination("Plaza de las Tres Culturas","Ciudad de México");
PlazaTresCulturas.AddDescription("En el centro de Ciudad de México hay un lugar, quizá el único del continente americano, donde es posible tomar una foto en la que aparezcan edificios auténticos de tres civilizaciones diferentes: la precolombina, la colonial y la moderna. La Plaza de las Tres Culturas alberga pirámides y ruinas de la prehispánica Tenochtitlán y un convento de la época colonial, y además está rodeada por modernas edificaciones.");

let MuseoNacionalAntropología = new Destination("Museo Nacional de Antropología","Ciudad de México");
MuseoNacionalAntropología.AddDescription("Este museo localizado en el Bosque de Chapultepec alberga la muestra antropológica y arqueológica prehispánica más variada de América. Prácticamente todas las culturas precolombinas mexicanas y mesoamericanas están representadas a través de piezas auténticas, réplicas, esculturas, incluyendo la famosa Piedra del Sol, mosaicos, cerámicas y otros objetos. Una de sus patrimonios más preciados es la colección de incunables y otros valiosos documentos guardados en la Biblioteca Nacional de Antropología e Historia.");

let BosqueChapultepec = new Destination("Bosque de Chapultepec","Ciudad de México");
BosqueChapultepec.AddDescription("Este enorme espacio de 678 hectáreas es uno de los parques urbanos más grandes de América Latina. Cuenta con piezas y monumentos representativos de la era prehispánica, de la época virreinal y del México moderno. Sus dos lagos son frecuentados para andar en barca y practicar otros entretenimientos acuáticos. Uno de sus principales atractivos es el Castillo de Chapultepec, el único castillo y casa real en América, por haber sido residencia del Virrey de Nueva España. Otros sitios importantes del bosque son el Altar de la Patria, el Museo de Antropología, el Museo de Arte Moderno y el Museo Tamayo de Arte Contemporáneo. Además, es un refugio de fauna y flora en medio del ajetreo de la ciudad.");

let Xochimilco = new Destination("Xochimilco","Ciudad de México");
Xochimilco.AddDescription("Pocos lugares fueron más filmados durante la época de oro del cine mexicano que los canales de Xochimilco, con sus pintorescas barcas y barqueros. Las coloridas embarcaciones, llamadas trajineras, circulan apretujadas en un recorrido por distintos puntos de interés, como las islas de Las Muñecas y de La Llorona, la Laguna de Teshuilo y el Museo del Ajolote. No es extraño que los viajeros vayan tomando un tequilita, a los compases de un mariachi móvil que viaja en barca. Otro lugar de Xochimilco que te recomendamos visitar es el Museo Dolores Olmedo Patiño, dedicado a la obra artística de la pareja más famosa del México moderno, Diego Rivera y Frida Kahlo.");

let MuseoFridaKahlo = new Destination("Museo Frida Kahlo","Ciudad de México");
MuseoFridaKahlo.AddDescription("En la hermosa área central de la Delegación de Coyoacán está el museo dedicado a la coyoacanense más ilustre: Magdalena Carmen Frida Kahlo Calderón. La infortunada Frida, marcada por el polio, un terrible accidente de circulación y un tormentoso matrimonio con el famoso artista Diego Rivera, fue una mujer poco convencional, muy adelantada a su tiempo. La Casa Azul, residencia familiar desde antes del nacimiento de la pintora y luego su casa, ahora es una galería que muestra obra y vivencias de la célebre pareja.");

let Teotihuacan= new Destination("Pirámides de Teotihuacán","Estado de México");
Teotihuacan.AddDescription("Teotihuacán es «el lugar donde los hombres se convierten en dioses» en la lengua náhuatl y así te sentirás cuando asciendas a la Pirámide del Sol o a la Pirámide de la Luna y observes desde las alturas La Ciudadela, La Calzada de Los Muertos, la Pirámide de la Serpiente Emplumada y el Palacio de Quetzalpapálotl.");

let CentroHistóricoG= new Destination("Centro histórico","Jalisco");
CentroHistóricoG.AddDescription("La capital del estado de Jalisco es la segunda ciudad más poblada del país y no le va atrás a Ciudad de México en lugares de interés.Entre estos destacan su soberbia catedral, el Museo de la ciudad, el de Paleontología, el Regional, el de Cerámica y el pintoresco Museo De Arte Huichol Wixárika. Guadalajara es una ciudad con mucho movimiento cultural.");

let CatedralGuadalajara= new Destination("Catedral de Guadalajara","Jalisco");
CatedralGuadalajara.AddDescription("Este imponente templo levantado en honor de la Asunción de María es el edificio más simbólico de la ciudad. Las agujas de sus dos torres neogóticas son una referencia geográfica.Fue construida entre los siglos XVI y XVII y es un patrimonio en peligro, principalmente por su hundimiento a causa de los repetidos movimientos sísmicos que ocurren en esa región del país. En la catedral se guardan las reliquias de la mártir romana Santa Inocencia.");
//dejar esta linea

let Tequila= new Destination("Tequila","Jalisco");
Tequila.AddDescription("Este imponente templo levantado en honor de la Asunción de María es el edificio más simbólico de la ciudad. Las agujas de sus dos torres neogóticas son una referencia geográfica.Fue construida entre los siglos XVI y XVII y es un patrimonio en peligro, principalmente por su hundimiento a causa de los repetidos movimientos sísmicos que ocurren en esa región del país. En la catedral se guardan las reliquias de la mártir romana Santa Inocencia.");

let Guanajuato= new Destination("Guanajuato","Guanajuato");
Guanajuato.AddDescription("Esta bella ciudad, universitaria, colonial y con una intensa vida cultural, surgió gracias a la explotación del oro y la plata, y hoy es Patrimonio de la Humanidad. Entre sus lugares imprescindibles están la Basílica Colegiata de Nuestra Señora de Guanajuato, la Plaza de la Paz, la Alhóndiga de Granaditas, el Palacio Legislativo, el Teatro Juárez, la Universidad, el Templo de los Jesuitas y el Mercado Hidalgo. Por el mes de octubre, la ciudad es sede del Festival Internacional Cervantino, famoso evento dedicado la música de todos los géneros y culturas, con espacio para el teatro, la ópera, las letras y otras manifestaciones culturales.");

let Taxco= new Destination("Taxco","Guerrero");
Taxco.AddDescription("Engastado en la montaña como una joya valiosa, está un pueblo de casas blancas, Taxco de Alarcón, que maravilla al turista desde la distancia por su bella e impecable arquitectura. Taxco vive del turismo y de la joyería de plata, campo en el que sus artesanos y orfebres son mundialmente conocidos.");

let ZonasMerida= new Destination("Las zonas arqueológicas en Mérida","Yucatán");
ZonasMerida.AddDescription("A su pasado maya y colonial, la capital del estado de Yucatán une un perfil moderno, de ciudad particularmente interesada por las ciencias. Un conjunto de yacimientos arqueológicos cercanos atestiguan su pasado prehispánico, entre los que destacan Dzibilchaltún, Caucel y Xoclán.Los museos y monumentos más representativos son el Palacio Cantón, el Museo del Mundo Maya, el Museo de la Canción Yucateca y la Casa de los Montejo, un hermoso ejemplo de la arquitectura residencial del siglo XVI. Otro atractivo de Mérida son sus haciendas que se dedicaban al cultivo del sisal, ahora convertidas en museos y sitios de interés.");

let Guelaguetza= new Destination("La Guelaguetza en Oaxaca de Juárez","Oaxaca");
Guelaguetza.AddDescription("A su pasado maya y colonial, la capital del estado de Yucatán une un perfil moderno, de ciudad particularmente interesada por las ciencias. Un conjunto de yacimientos arqueológicos cercanos atestiguan su pasado prehispánico, entre los que destacan Dzibilchaltún, Caucel y Xoclán.Los museos y monumentos más representativos son el Palacio Cantón, el Museo del Mundo Maya, el Museo de la Canción Yucateca y la Casa de los Montejo, un hermoso ejemplo de la arquitectura residencial del siglo XVI. Otro atractivo de Mérida son sus haciendas que se dedicaban al cultivo del sisal, ahora convertidas en museos y sitios de interés.");

let Toluca= new Destination("Toluca","Estado de México");
Toluca.AddDescription("La capital del estado de México, Toluca de Lerdo, ofrece un conjunto de atracciones que mezclan el pasado del periodo virreinal y los tiempos modernos.Sus obras arquitectónicas más llamativas son los portales, convertidos en emblemas de la ciudad; la Catedral de San José, sobrio templo neoclásico frente a la Plaza de Los Mártires, la Iglesia de Nuestra Señora del Carmen y los palacios de los poderes públicos (Municipal, Gubernamental y Legislativo).El jardín botánico, conocido como el Cosmovitral, es una bella edificación etilo Art Noveau de cristal y hierro forjado, que data de principios del siglo XX.");

let MaleconMazatlan= new Destination("El Malecón de Mazatlán","Sinaloa");
MaleconMazatlan.AddDescription("Es una ciudad en la que coexisten su vieja estirpe colonial y su moderna infraestructura para el turismo, siendo llamada La Perla del Pacífico.En el centro histórico hay que visitar la catedral-basílica, un bello templo barroco en el que se rinde veneración a la Inmaculada Concepción.También sobresalen en el casco viejo el Teatro Ángela Peralta, la Plazuela Machado y el Centro Municipal de las Artes, que funciona en el edificio del antiguo Hotel Iturbide.Uno de los corredores más activos de la ciudad es su largo malecón de 21 kilómetros. Los navegantes cuentan con un imponente faro situado en la cúspide del Cerro del Crestón. El Carnaval de Mazatlán se ha hecho célebre por su colorido, caracterizado por los inmensos monigotes de los desfiles.");

let MonumentosLeon= new Destination("Los monumentos en León","Guanajuato");
MonumentosLeon.AddDescription("La hermosa ciudad guanajuatense tiene varios apodos. Uno de ellos es «La Capital Mundial del Calzado» por su especialización desde mediados del siglo XX en el trabajo del cuero.La ciudad ha venido reorientando su economía hacia otras actividades, con el turismo en lugar prominente. Sus monumentos más simbólicos son la Catedral-Basílica de la Madre Santísima de la Luz, el Templo Expiatorio del Sagrado Corazón de Jesús y el Cristo Rey.");

let chjuarez= new Destination("El centro histórico de Ciudad Juárez","Chihuahua");
chjuarez.AddDescription("Con el río Bravo haciendo de línea fronteriza entre México y Estados Unidos, del lado norteamericano está la ciudad tejana de El Paso y del lado mexicano se sitúa Ciudad Juárez.En el centro histórico están la catedral, la Misión de Guadalupe y el Museo de la Revolución en la Frontera, dedicado a la Revolución Mexicana en esa zona del país. Otros atractivos juarenses son el Parque Público Federal El Chamizal, que cuenta con un museo de arqueología, y el Monumento a la Mexicanidad. A 50 kilómetros de la ciudad están los Médanos de Samalayuca, un atractivo para el turismo de aventura.");

let MomiasCelaya= new Destination("El museo de las momias en Celaya","Guanajuato");
MomiasCelaya.AddDescription("Fue inicialmente una comunidad del pueblo otomí. Los entusiastas de la peculiar corriente turística del misterio y el terror tienen en Celaya uno de sus santuarios, que es más bien un cementerio.El panteón municipal es frecuentado para admirar su sobrecogedor desorden y para visitar el Museo de la Momias. Pero no vayas a creer que Celaya es una ciudad sombría. Sus jardines, alamedas, parques, museos, murales, haciendas y su popular Bola de Agua, harán que pases ratos muy placenteros en la localidad guanajuatense.");

let Tula = new Destination("Tula","Hidalgo");
Tula.AddDescription("El emplazamiento náhuatl de Tollan-Xicocotitlan, mejor conocido como Tula, es célebre por sus Atlantes, los colosales monolitos de 4,5 metros de altura tallados en roca basáltica.Integran un artístico conjunto de guerreros toltecas representados con pectorales de mariposa y su armamento cotidiano, incluyendo cuchillo de pedernal. En la época prehispánica Tula fue la capital tolteca y el principal centro de poder de los Valles de México y de Puebla, viviendo su esplendor entre los siglos X y XII. Otras edificaciones de interés del asentamiento precolombino son sus pirámides, el Palacio Quemado, los campos para el Juego de Pelota y el Coatepantli o Muro de las Serpientes, bellamente decorado con relieves.");

let Tecate = new Destination("Tula","Hidalgo");
Tecate.AddDescription("Este Pueblo Mágico mexicano en extremo noroccidental del país, en la península de Baja California, es popular por sus spas, amparado en su acogedor ambiente colonial, su clima siempre fresco y el estupendo entorno natural que le confieren sus campos y montañas.Una de las tradiciones mejor cultivadas de Tecate es la de la elaboración del pan. Hay panaderías por todos lados, que ofrecen el arte del amasado y el horneado en todas las variedades. Otro atractivo son las pinturas rupestres hechas en granitos que se encuentran en el Rancho San José. Esta solo a unos 20 mintuos de Tijuana.");

