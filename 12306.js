const version = 'V1.0.23';

var obj=JSON.parse($request.body),ddgksf2013={};"0007"==obj.placementNo?(ddgksf2013.materialsList=[{billMaterialsId:"6491",filePath:"ddgksf2013",creativeType:1}],ddgksf2013.advertParam={skipTime:1},ddgksf2013.code="00"):ddgksf2013="G0054"==obj.placementNo?{code:"00",materialsList:[{}]}:{code:"00",message:"无广告返回"},"undefined"!=typeof $task?$done({body:JSON.stringify(ddgksf2013)}):$done({response:{body:JSON.stringify(ddgksf2013)}});
