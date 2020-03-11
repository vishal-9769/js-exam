const mapdata =() => {

  let nodes = [];
  let edges = [];

  // Write your logic here...
  const matrix=5;
  
  let i=0;
  let j=0;
 
  for(i=0;i<matrix;i++){
     for(j=0;j<matrix;j++){
       
      
      nodes.push({"data":{"id":`N${i}-${j}`}});
      if(i+1<matrix){
        edges.push({"data":{"id":`${i}-${j}S`,"source":`N${i}-${j}`,"target":`N${i+1}-${j}`}})
        edges.push({"data":{"id":`${i}-${j}N`,"source":`N${i}-${j}`,"target":`N${i+1}-${j}`}})
       
      }
      if(j+1<matrix){
        edges.push({"data":{"id":`${i}-${j}w`,"source":`N${i}-${j}`,"target":`N${i}-${j+1}`}})
        edges.push({"data":{"id":`${i}-${j}E`,"source":`N${i}-${j}`,"target":`N${i}-${j+1}`}})
      }
      if(i<matrix-1 && j<matrix-1){
        edges.push({"data":{"id":`${i}-${j}A`,"source":`N${i}-${j}`,"target":`N${i+1}-${j+1}`}})
        
      }
      if(j>0 && i<matrix-1)
      {
        edges.push({"data":{"id":`${i}-${j}B`,"source":`N${i}-${j}`,"target":`N${i+1}-${j-1}`}})
      }

     }
  }
  console.log(edges.length);
  console.log(nodes.length);
  // for(i=0;i<max_row;i++){
  //   for(j=0;j<max_col;j++){
  //     nodes.push({"data":{"id":`N${i}-${j}`}});


  //     if(i==0 && j==0){
  //       edges.push({"data":{"id":`${i}-${j}S`,"source":`N${i}-${j}`,"target":`N${0}-${1}`}})
  //       edges.push({"data":{"id":`${i}-${j}E`,"source":`N${i}-${j}`,"target":`N${1}-${0}`}})
  //      }
  //      if(i==0 && j==1){
  //       edges.push({"data":{"id":`${i}-${j}S`,"source":`N${0}-${1}`,"target":`N${0}-${2}`}})
  //       edges.push({"data":{"id":`${i}-${j}E`,"source":`N${0}-${1}`,"target":`N${1}-${1}`}})
  //      }
  //      if(i==0 && j==2){
  //       edges.push({"data":{"id":`${i}-${j}S`,"source":`N${0}-${2}`,"target":`N${1}-${2}`}})
  //       //edges.push({"data":{"id":`${i}-${j}E`,"source":`N${0}-${2}`,"target":`N${1}-${1}`}})
  //      }
  //      if(i==1 && j==0){
  //       edges.push({"data":{"id":`${i}-${j}S`,"source":`N${1}-${0}`,"target":`N${1}-${1}`}})
  //       edges.push({"data":{"id":`${i}-${j}E`,"source":`N${1}-${0}`,"target":`N${2}-${0}`}})
  //      }
  //      if(i==1 && j==1){
  //       edges.push({"data":{"id":`${i}-${j}S`,"source":`N${1}-${1}`,"target":`N${1}-${2}`}})
  //       edges.push({"data":{"id":`${i}-${j}E`,"source":`N${1}-${1}`,"target":`N${2}-${1}`}})
  //      }
  //      if(i==1 && j==2){
  //       edges.push({"data":{"id":`${i}-${j}S`,"source":`N${1}-${2}`,"target":`N${2}-${2}`}})
  //       //edges.push({"data":{"id":`${i}-${j}E`,"source":`N${1}-${1}`,"target":`N${2}-${1}`}})
  //      }
  //      if(i==2 && j==0){
  //       edges.push({"data":{"id":`${i}-${j}E`,"source":`N${2}-${0}`,"target":`N${2}-${1}`}})
  //      }
  //      if(i==2 && j==1){
  //       edges.push({"data":{"id":`${i}-${j}E`,"source":`N${2}-${1}`,"target":`N${2}-${2}`}})

  //      }
  //      //edges.push({"data":{"id":`${i}-${j}S`,"source":`N${i}-${j}`,"target":`N${i}-${1}`}})
  //      //edges.push({"data":{"id":`${i}-${j}E`,"source":`N${i}-${j}`,"target":`N${1}-${j}`}})
  //      //edges.push({"data":{"id":`${i}-${j}W`,"source":`N${j}-${i}`,"target":`N${j}-${i}`}}) 
  //   //  edges.push({"data":{"id":`${i}-${j}S`,"source":`N${i}-${j}`,"target":`N${i}-${1}`}})
  //   //  edges.push({"data":{"id":`${i}-${j}E`,"source":`N${i}-${1}`,"target":`N${1}-${j}`}})
  //   //  edges.push({"data":{"id":`${i}-${j}W`,"source":`N${i}-${j}`,"target":`N${i}-${j}`}})

  //   }
  // }
    

  //    // if(i==0){
      //     edges.push({"data":{"id":`${i}-${j}E`,"source":`N${i}-${i}`,"target":`N${i}-${1}`}})
      //     edges.push({"data":{"id":`${i}-${j}S`,"source":`N${i}-${i}`,"target":`N${1}-${i}`}})
      //     edges.push({"data":{"id":`${i}-${j}W`,"source":`N${i}-${i}`,"target":`N${1}-${i}`}})
      //   }
      //   if(j==0){
      //     edges.push({"data":{"id":`${i}-${j}E`,"source":`N${j}-${1}`,"target":`N${1}-${1}`}})
      //     edges.push({"data":{"id":`${i}-${j}S`,"source":`N${1}-${j}`,"target":`N${1}-${1}`}})
      //     edges.push({"data":{"id":`${i}-${j}W`,"source":`N${1}-${j}`,"target":`N${1}-${1}`}})
      //   }edges.push({"data":{"id":`${i}-${j}W`,"source":`N${i}-${j}`,"target":`N${i}-${j+1}`}})
    //  edges.push({"data":{"id":`${i}-${j}E`,"source":`N${i}-${j}`,"target":`N${i}-${j}`}})
    //   console.log('inner j');
    //  console.log("j",j);
    // console.log("i",i);
   
    
    // edges.push({"data":{"id":`${i}-${j}E`,"source":`N${i}-${j}`,"target":`N${i}-${j}`}})
    // console.log('inner i');
    // console.log("j",j);
    // console.log("i",i);


  //console.log(edges.length);
 
  //console.log(nodes);
  elements = {
    nodes,
    edges
  };

  return elements;

}
module.exports.mapdata = mapdata;


