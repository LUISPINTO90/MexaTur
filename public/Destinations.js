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

Huasteca = new Destination("Huasteca Potosina en San Luis Potosí","San Luis Potosí");
Huasteca.AddDescription("La Huasteca Potosina es un amplio espacio del estado de San Luis Potosí, que reúne un conjunto de municipios y atracciones, como si estuvieras en un pequeño país, presto a disfrutar de todos los encantos posibles. Su epicentro es Ciudad Valles, donde está la mayor capacidad hotelera. Cerca está Micos, con sus hermosas cascadas escalonadas. En Aquismón te espera el Sótano de las Golondrinas, un abismo de vértigo de más de 500 metros de profundidad, repleto de aves. En el municipio de Xilitla la gran atracción es el Jardín Surrealista de Sir Edward James.");

Bacalar = new Destination("Bacalar","Quitana Roo");
Bacalar.AddDescription("La también llamada Laguna de los Siete Colores es impactante por su belleza, sus rápidos, sus estromatolitos y muy especialmente por sus embrujadores cenotes.La laguna es también sitio de moda para la motonáutica y otros divertimientos acuáticos. Fuera del agua, la localidad de Bacalar cuenta con otros sitios de interés turístico, como el Fuerte de San Felipe Neri y el Museo de la Guerra de Castas.");

CascadasHierve = new Destination("Cascadas de Hierve el Agua","Oaxaca");
CascadasHierve.AddDescription("Pueda que de entrada el nombre te ponga a pensar en unos saltos de agua humeante, pero esta maravilla natural del estado de Oaxaca es un grupo de cascadas petrificadas.Las cataratas pétreas se formaron a lo largo de los milenios, mediante el goteo del agua saturada de carbonatos, de la misma manera que se erigen las estalactitas y estalagmitas en las cavernas. El fascinante lugar está la población oaxaqueña de San Isidro Roaguía y es también una plaza arqueológica de interés, por un sistema zapoteca de irrigación y terrazas.");

Xilitla = new Destination("Pozas de Xilitla","San Luis Potosí");
Xilitla.AddDescription("Conjugando espléndidamente la obra del hombre con la de la naturaleza, en el municipio potosino de Xilitla se encuentra un espectacular conjunto artístico, realizado por el acaudalado escultor escocés del siglo XX, Edward Jones.El conglomerado arquitectónico y escultórico se encuentra en un hermoso predio de más de 300 mil metros cuadrados y las piezas artísticas están admirablemente integradas a cascadas, pozas, jardines y otros componentes del entorno natural. Entre estas destacan La escalera al cielo, La recámara con techo en forma de ballena y  LaCasa de los Peristilos, por nombrar solo tres.");

IslasMarietas = new Destination("Islas Marietas","Nayarit");
IslasMarietas.AddDescription("Son dos islas nayaritas deshabitadas, llamadas Isla Redonda e Isla Larga. Son frecuentadas por sus hermosas playas, ideales para el buceo, el snorkel y la observación de la vida submarina.También son visitadas por los observadores de aves, particularmente para ver a una no muy común, el alcatraz patas azules.");

PlayaDelCarmen = new Destination("Playa del Carmen","Quintana Roo");
PlayaDelCarmen.AddDescription("La Riviera Maya, en el Caribe mexicano, es uno de los principales corredores mundiales del turismo de playa y su corazón es Playa del Carmen.La ciudad del estado de Quintana Roo, frente a la isla de Cozumel, cuenta con una infraestructura hotelera de primer orden y en permanente expansión, playas paradisíacas, parques ecológicos y excelentes restaurantes en los que disfrutar los frescos pescados y mariscos caribeños y la gastronomía internacional.");

AguaAzul = new Destination("Cascadas Agua Azul","Chiapas");
AguaAzul.AddDescription("Los ríos Otulún, Shumuljá y Tulijá, en el municipio chiapaneco de Tumbalá, forman acantilados verticales en sus cañones, por los que se desprenden unas bellas cataratas blaquiazules, las cascadas Agua Azul.La bonita tonalidad azulada proviene de los carbonatos que se van disolviendo en el agua a lo largo de su curso. El marco paradisíaco del lugar lo complementa el intrincado follaje circundante. El acceso al sitio se encuentra en la carretera que une a San Cristóbal de las Casas con Palenque.");

MariposasMonarcas  = new Destination("Santuario de la Mariposa Monarca","Michoacán");
MariposasMonarcas.AddDescription("La mariposa Monarca, la bella especie de característicos colores naranja y negro, ha sobrevivido en América del Norte gracias a un largo viaje de reposo que tiene a México como punto de llegada.Es el insecto que realiza el movimiento migratorio más largo, viajando 4.000 kilómetros para escapar del crudo invierno canadiense.En Michoacán tiene dos grandes santuarios, la montaña de El Rosario y Sierra Chincua. Los observadores de la vida silvestre se las arreglan para ver a estos curiosos insectos que se hospedan en México entre noviembre y marzo.");

PalenqueChiapas  = new Destination("Palenque en Chiapas","Chiapas");
PalenqueChiapas.AddDescription("Es una ciudad de origen maya en el estado de Chiapas, cuyos principales atractivos son sus yacimientos arqueológicos y sus hermosas cascadas. Buena parte de la zona arqueológica está aún por desenterrar, permaneciendo sepultada en la selva, pero lo que se ha develado es impresionante.Las principales edificaciones puestas al descubierto son El Observatorio, el Templo del Sol, el Templo de las Inscripciones, el Templo del Conde, el Templo de La Calavera, el Templo de La Cruz y El Palacio. En varios de ellos hay magníficos bajo relieves y otros elementos decorativos. Palenque es también famoso por sus caídas de agua, entre las que se encuentran Misol-Ha, Agua Azul y Agua Clara.");

CatedralDeGuadalupe = new Destination("Zócalo y Catedral de Nuestra Señora de Guadalupe","Ciudad de México");
CatedralDeGuadalupe.AddDescription("La Plaza de la Constitución, nombre oficial del famoso zócalo de Ciudad de México, es el centro neurálgico del país. Es el lugar de todas las celebraciones magnas y está rodeado de las edificaciones más emblemáticas de la nación.La más importante para los mexicanos es la Catedral de Nuestra Señora de Guadalupe, el templo más grande de América.Su construcción fue iniciada en el siglo XVI y se estuvo hundiendo lenta pero progresivamente. Afortunadamente, tras complejos trabajos de estabilización, este Patrimonio de la Humanidad quedó libre de riesgos.");

BellasArtes = new Destination("Palacio de Bellas Artes","Ciudad de México");
BellasArtes.AddDescription("La majestuosa edificación en estilos modernista y art decó es el símbolo de la alta cultura, no solo de Ciudad de  México, sino de todo el país. Fue inaugurado en 1918, como máxima joya en la conmemoración del primer centenario de la Independencia. Cuenta con un museo y en su principal sala de espectáculos se presentan funciones de ballet, teatro y música. Sus paredes están decoradas con murales de Rufino Tamayo, José Clemente Orozco, David Alfaro Siqueiros, Diego Rivera y otros grandes pintores mexicanos.");

PlazaTresCulturas = new Destination("Plaza de las Tres Culturas","Ciudad de México");
PlazaTresCulturas.AddDescription("En el centro de Ciudad de México hay un lugar, quizá el único del continente americano, donde es posible tomar una foto en la que aparezcan edificios auténticos de tres civilizaciones diferentes: la precolombina, la colonial y la moderna. La Plaza de las Tres Culturas alberga pirámides y ruinas de la prehispánica Tenochtitlán y un convento de la época colonial, y además está rodeada por modernas edificaciones.");

MuseoNacionalAntropología = new Destination("Museo Nacional de Antropología","Ciudad de México");
MuseoNacionalAntropología.AddDescription("Este museo localizado en el Bosque de Chapultepec alberga la muestra antropológica y arqueológica prehispánica más variada de América. Prácticamente todas las culturas precolombinas mexicanas y mesoamericanas están representadas a través de piezas auténticas, réplicas, esculturas, incluyendo la famosa Piedra del Sol, mosaicos, cerámicas y otros objetos. Una de sus patrimonios más preciados es la colección de incunables y otros valiosos documentos guardados en la Biblioteca Nacional de Antropología e Historia.");

BosqueChapultepec = new Destination("Bosque de Chapultepec","Ciudad de México");
BosqueChapultepec.AddDescription("Este enorme espacio de 678 hectáreas es uno de los parques urbanos más grandes de América Latina. Cuenta con piezas y monumentos representativos de la era prehispánica, de la época virreinal y del México moderno. Sus dos lagos son frecuentados para andar en barca y practicar otros entretenimientos acuáticos. Uno de sus principales atractivos es el Castillo de Chapultepec, el único castillo y casa real en América, por haber sido residencia del Virrey de Nueva España. Otros sitios importantes del bosque son el Altar de la Patria, el Museo de Antropología, el Museo de Arte Moderno y el Museo Tamayo de Arte Contemporáneo. Además, es un refugio de fauna y flora en medio del ajetreo de la ciudad.");

Xochimilco = new Destination("Xochimilco","Ciudad de México");
Xochimilco.AddDescription("Pocos lugares fueron más filmados durante la época de oro del cine mexicano que los canales de Xochimilco, con sus pintorescas barcas y barqueros. Las coloridas embarcaciones, llamadas trajineras, circulan apretujadas en un recorrido por distintos puntos de interés, como las islas de Las Muñecas y de La Llorona, la Laguna de Teshuilo y el Museo del Ajolote. No es extraño que los viajeros vayan tomando un tequilita, a los compases de un mariachi móvil que viaja en barca. Otro lugar de Xochimilco que te recomendamos visitar es el Museo Dolores Olmedo Patiño, dedicado a la obra artística de la pareja más famosa del México moderno, Diego Rivera y Frida Kahlo.");

MuseoFridaKahlo = new Destination("Museo Frida Kahlo","Ciudad de México");
MuseoFridaKahlo.AddDescription("En la hermosa área central de la Delegación de Coyoacán está el museo dedicado a la coyoacanense más ilustre: Magdalena Carmen Frida Kahlo Calderón. La infortunada Frida, marcada por el polio, un terrible accidente de circulación y un tormentoso matrimonio con el famoso artista Diego Rivera, fue una mujer poco convencional, muy adelantada a su tiempo. La Casa Azul, residencia familiar desde antes del nacimiento de la pintora y luego su casa, ahora es una galería que muestra obra y vivencias de la célebre pareja.");

Teotihuacan= new Destination("Pirámides de Teotihuacán","Estado de México");
Teotihuacan.AddDescription("Teotihuacán es «el lugar donde los hombres se convierten en dioses» en la lengua náhuatl y así te sentirás cuando asciendas a la Pirámide del Sol o a la Pirámide de la Luna y observes desde las alturas La Ciudadela, La Calzada de Los Muertos, la Pirámide de la Serpiente Emplumada y el Palacio de Quetzalpapálotl.");

CentroHistóricoG= new Destination("Centro histórico","Guadalajara");
CentroHistóricoG.AddDescription("La capital del estado de Jalisco es la segunda ciudad más poblada del país y no le va atrás a Ciudad de México en lugares de interés.Entre estos destacan su soberbia catedral, el Museo de la ciudad, el de Paleontología, el Regional, el de Cerámica y el pintoresco Museo De Arte Huichol Wixárika. Guadalajara es una ciudad con mucho movimiento cultural.");

CatedralGuadalajara= new Destination("Catedral de Guadalajara","Guadalajara");
CatedralGuadalajara.AddDescription("Este imponente templo levantado en honor de la Asunción de María es el edificio más simbólico de la ciudad. Las agujas de sus dos torres neogóticas son una referencia geográfica.Fue construida entre los siglos XVI y XVII y es un patrimonio en peligro, principalmente por su hundimiento a causa de los repetidos movimientos sísmicos que ocurren en esa región del país. En la catedral se guardan las reliquias de la mártir romana Santa Inocencia.");
