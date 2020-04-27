// Javascript skeleton.

var myLG = context.currentLG.name;   // name of the LG this VU is on

//logger.debug("ComputedValue="+myLG);   

var mySampleData = context.variableManager.getValue("SampleExtractionData");   // comes from the timestamp of the previous response


var myVar = context.variableManager.getValue("SampleRandomInt");  // somne random numbers


var myString = myLG+","+mySampleData+","+myVar;
/// just using three separate data points to build a "row" by concatenating them with commas in between


context.variableManager.setValue("outPutString",myString);