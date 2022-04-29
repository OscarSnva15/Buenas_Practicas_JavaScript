google.charts.load('current',{'packages': ['corechart', 'bar']}); 
google.charts.setOnLoadCallback(drawChart); var arrayChartData=[]; 

//Obetencion de la estructura de datos del indicador con los parametros 
//Clave: 1002000002 
//Idioma: es 
//Clave entidad: 01 
//Datos resientes: false 
//Fuente de datos: BISE 
//Versión: 2.0 
var urlDataStructure="https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/1002000001/es/00/false/BISE/2.0/[Aquí va tu Token]?type=json"; 
$.getJSON(urlDataStructure, function (dataStructure){
    var Observations=dataStructure.Series[0].OBSERVATIONS; 
    for (var i=0; i <=Observations.length - 1; i++)
        {arrayChartData[i]=[Observations[i].TIME_PERIOD, parseInt(Observations[i].OBS_VALUE), '#E16c32'];}
    }); 

//Obetencion de metadatos del indicador con los parametros 
//Catalago: CL_INDICATOR 
//Clave: 1002000002 
//Idioma: es 
//Fuente de datos: BISE 
//Versión: 2.0 
var dataCL_INDICATOR; 
var urlDataCL_INDICATOR="https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/CL_INDICATOR/1002000001/es/BISE/2.0/[Aquí va tu Token]?type=json"; 
$.getJSON(urlDataCL_INDICATOR, function (dataCatalog){
    dataCL_INDICATOR={Descripcion: dataCatalog.CODE[0].Description, AgencyID: dataCatalog.agencyID,}}); 

//Obetencion de la unidadde medida del indicador con los parametros 
//Catalago: CL_UNIT //Clave: 96 
//Idioma: es //Fuente de datos: BISE 
//Versión: 2.0 
var dataCL_UNIT; 
var urlDataCL_UNIT="https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/CL_UNIT/96/es/BISE/2.0/[Aquí va tu Token]?type=json"; 
$.getJSON(urlDataCL_UNIT, function (dataCatalog){
    dataCL_UNIT={Descripcion: dataCatalog.CODE[0].Description, Value: dataCatalog.CODE[0].value,}
}); 

//Obetencion de la nota del indicador con los parametros
//Catalago: CL_NOTE 
//Clave: 1398 
//Idioma: es 
//Fuente de datos: BISE 
//Versión: 2.0 
var dataCL_NOTE; 
var urlDataCL_NOTE="https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/CL_NOTE/1398/es/BISE/2.0/[Aquí va tu Token]?type=json"; 
$.getJSON(urlDataCL_NOTE, function (dataCatalog){
    dataCL_NOTE={Descripcion: dataCatalog.CODE[0].Description, Value: dataCatalog.CODE[0].value,}
}); 

//Obetencion de la fuente del indicador con los parametros
//Catalago: CL_SOURCE 
//Clave: 2,3,343,487,510 
//Idioma: es 
//Fuente de datos: BISE 
//Versión: 2.0 
var dataCL_SOURCE; 
var urlDataCL_SOURCE="https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/CL_SOURCE/2,3,343,487,510/es/BISE/2.0/[Aquí va tu Token]?type=json"; 
$.getJSON(urlDataCL_SOURCE, function (dataCatalog){
    var descripcion=""; var value=""; 
for (var i=0; dataCatalog.CODE.length >i; i++){
    descripcion=descripcion + " " + dataCatalog.CODE[i].Description; value=value + " " + dataCatalog.CODE[i].value;
}
    dataCL_SOURCE={Descripcion: descripcion, Value: value,}
}); 

//Obetencion del tema del indicador con los parametros
//Catalago: CL_TOPIC
//Clave: 2,3,343,487,510 
//Idioma: es 
//Fuente de datos: BISE 
//Versión: 2.0 
var dataCL_TOPIC; 
var urlDataCL_TOPIC="https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/CL_TOPIC/2,3,343,487,510/es/BISE/2.0/[Aquí va tu Token]?type=json"; 
$.getJSON(urlDataCL_SOURCE, function (dataCatalog){var descripcion=""; var value=""; 
    for (var i=0; dataCatalog.CODE.length >i; i++)
    {descripcion=descripcion + " " + dataCatalog.CODE[i].Description; value=value + " " + dataCatalog.CODE[i].value;
    }
    dataCL_SOURCE={Descripcion: descripcion, Value: value,}
});

//Obetencion de la frecuancia o periodicidad del indicador con los parametros
//Catalago: CL_FREQ 
//Clave: 2,3,343,487,510 
//Idioma: es 
//Fuente de datos: BISE 
//Versión: 2.0 
var dataCL_FREQ; 
var urlDataCL_FREQ="https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/CL_FREQ/7/es/BISE/2.0/[Aquí va tu Token]?type=json"; $.getJSON(urlDataCL_FREQ, function (dataCatalog){
    var descripcion=""; 
    var value=""; 
    dataCL_FREQ={Descripcion: dataCatalog.CODE[0].Description, Value: dataCatalog.CODE[0].value,}
}); 

//Obetencion de la entidado municipio del indicador con los parametros
//Catalago: CL_GEO_AREA 
//Clave: 00 
//Idioma: es 
//Fuente de datos: BISE 
//Versión: 2.0 
var dataCL_GEO_AREA; var urlDataCL_GEO_AREA="https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/CL_GEO_AREA/00/es/BISE/2.0/5a885848-04f9-4a7b-8925-589b80829e22?type=json"; 
$.getJSON(urlDataCL_GEO_AREA, function (dataCatalog){
    var descripcion=""; 
    var value=""; 
    dataCL_GEO_AREA={Descripcion: dataCatalog.CODE[0].Description, Value: dataCatalog.CODE[0].value,}}
); 

//Funcion para pintar la grafica 
function drawChart(){
document.getElementById("NoteChart").innerHTML='<b >Nota </b ><br >' + dataCL_NOTE.Descripcion; 
document.getElementById("FuenteChart").innerHTML='<b >Fuente </b ><br >' + dataCL_SOURCE.Descripcion; 
var data=google.visualization.arrayToDataTable([[{role: "domain", 
                                                 Label: "Año", 
                                                 type: "string"},
                                                 {
                                                    Label: "Valor", 
                                                    role: "data", 
                                                    type: "number"
                                                },
                                                {role: "style"}]]); 
data.addRows(arrayChartData); 
var view=new google.visualization.DataView(data); 
var options={title:dataCL_INDICATOR.Descripcion + " (Periodicidad:" + dataCL_FREQ.Descripcion +", Área geográfica: "+dataCL_GEO_AREA.Descripcion+")", 
             titleTextStyle:{
                 fontSize: 14, 
                 color: 'black', 
                 bold: true, italic: false}, 
             chart:{title: 'Company Performance', 
                    subtitle: 'Sales, Expenses, and Profit: 2014-2017',}, 
             legend:{position: "none"}, 
             hAxis:{title: 'Años', format: 'yyyy', 
                    textStyle:{fontSize: 12, 
                               color: 'Black', 
                               bold: true, 
                               italic: false}, 
                    titleTextStyle:{fontSize: 12, 
                                    color: 'Black',
                                    bold: true, 
                                    italic: false}}, 
             vAxis:{title: dataCL_UNIT.Descripcion, 
                    min:1, 
                    textStyle:{fontSize: 12, 
                               color: 'Black', 
                               bold: false, 
                               italic: false,}, 
                    titleTextStyle:{fontSize: 12, 
                                    color: 'Black',
                                    bold: true, 
                                    italic: false}
                   }}; 
            var chart=new google.visualization.ColumnChart(document.getElementById('chart')); 
            chart.draw(view, options);}$(window).resize(function (){drawChart();});