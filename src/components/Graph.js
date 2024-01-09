import React from 'react';
import ReactFlow from 'reactflow';
 
import 'reactflow/dist/style.css';
 
export default function Graph(props) {


    var initialNodes = [
        { id: '-1', position: { x: 750 , y: 200 }, data: { label: 'You' } }
        ]
    var initialEdges = []

    if( props["data"].length > 0 )
    {
        initialNodes.push( { id: '-2', position: { x: 550 , y: (600 + (100*(Math.floor(props["data"].length/6)))) }, data: { label: 'Doctor A' } } )
        initialNodes.push( { id: '-3', position: { x: 950 , y: (600 + (100*(Math.floor(props["data"].length/6)))) }, data: { label: 'Doctor B' } } )
    }

    props["data"].forEach((element, index) => {
        initialNodes.push( 
            { id: ''+index, position: { y: 400+(100*(Math.floor(index/6))), x: 300+((200*(index%6))) }, data: { label: element.data.firstName.split("|")[0] } } )        
            
        initialEdges.push({ id: 'me-'+index, source: '-1', target: ''+index })

        if( index%3 === 0 )
        {
            initialEdges.push({ id: 'da-'+index, source: ''+index, target: '-2' })
        }

        if( index%4 === 0 ){
            initialEdges.push({ id: 'db-'+index, source: ''+index, target: '-3' })
        }

        });

    
  
  

  return (

    <div style={{ width: '100vw', height: '100vh' , position:"fixed", top:"0px" , left:"0px" }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
  );
}