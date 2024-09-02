import { fabric } from 'fabric-webpack';
import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';

const AddCaption = () => {
    const canvasRef = useRef(null);
    const location = useLocation();
    const image = location.state.image;
    
    useEffect(() => {
        const canvas = new fabric.Canvas(canvasRef.current, {
            height: 400,
            width: 600,
            backgroundColor: 'white',
        });
        
        canvas.selection = true;

        const addText = () => {
            const text = new fabric.IText('Edit me', {
                left: 100,
                top: 100,
                fontFamily: 'Arial',
                fill: '#333',
                fontSize: 24,
            });
            canvas.add(text);
        };

        const addRectangle = () => {
            const rectangle = new fabric.Rect({
                left: 200,
                top: 200,
                fill: 'blue',
                width: 100,
                height: 100,

                
            });
            canvas.add(rectangle);
        };

        const addCircle = () => {
            const circle = new fabric.Circle({
                left: 300,
                top: 100,
                fill: 'green',
                radius: 50,
            });
            canvas.add(circle);
        };

        const addTriangle = () => {
            const triangle = new fabric.Triangle({
                left: 400,
                top: 200,
                fill: 'red',
                width: 100,
                height: 100,
            });
            canvas.add(triangle);
        };

        const addPolygon = () => {
            const points = [
                { x: 50, y: 0 },
                { x: 100, y: 25 },
                { x: 100, y: 75 },
                { x: 50, y: 100 },
                { x: 0, y: 75 },
                { x: 0, y: 25 },
            ];
            const polygon = new fabric.Polygon(points, {
                left: 500,
                top: 300,
                fill: 'orange',
            });
            canvas.add(polygon);
        };
        canvas.setBackgroundImage(image.urls.regular, canvas.renderAll.bind(canvas), {
            width: canvas.width,
            height: canvas.height,
        });
        document.getElementById('addText').addEventListener('click', addText);
        document.getElementById('addRectangle').addEventListener('click', addRectangle);
        document.getElementById('addCircle').addEventListener('click', addCircle);
        document.getElementById('addTriangle').addEventListener('click', addTriangle);
        document.getElementById('addPolygon').addEventListener('click', addPolygon);
        
        canvas.on('object:selected', (e) => {
            const activeObject = e.target;
            activeObject.set({
                borderColor: 'red',
                cornerColor: 'green',
                cornerSize: 10,
                transparentCorners: false,
                hasControls: true,
                hasBorders: true,
            });
            canvas.renderAll();
        });

        canvas.on('selection:cleared', () => {
            canvas.renderAll();
        });
        return () => {
            document.getElementById('addText').removeEventListener('click', addText);
            document.getElementById('addRectangle').removeEventListener('click', addRectangle);
            document.getElementById('addCircle').removeEventListener('click', addCircle);
            document.getElementById('addTriangle').removeEventListener('click', addTriangle);
            document.getElementById('addPolygon').removeEventListener('click', addPolygon);
            canvas.dispose();
        };

    }, []);


    return (<>
        <a href='/'>
            Home
        </a>
        <div style={{
            display: 'flex', justifyContent: 'center',alignContent:'center',margin
            : '100px 0px'
        }}>
            <canvas ref={canvasRef}  id="canvas" crossOrigin="anonymous"/>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                border: '1px solid black',
                flexDirection: 'column',
                
                
            }}>
                <div style={{ margin: '5px', display: 'flex', height: '5%', flexWrap: 'wrap' }}>
                    <button id="addText">Add Text</button>
                    <button id="addRectangle">Add Rectangle</button>
                    <button id="addCircle">Add Circle</button>
                    <button id="addTriangle">Add Triangle</button>
                    <button id="addPolygon">Add Polygon</button>

                </div>
                <div style={{display:'flex'}}>
                    <button>Download</button>
                </div>
            </div>
        </div>
                </>
    );
}

export default AddCaption
