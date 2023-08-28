import Breadcrumb from 'react-bootstrap/Breadcrumb';
import '../index.css';
import { placeInfoList } from './pin-list.js';

function createListOfCity(){
    return [...new Set(placeInfoList.map(place => { return place.city} ).sort())];
}

/*
function listToMap(){
    return new Map(
        placeInfoList.map(obj => {
          return [obj.city, obj];
        }),
      );
}
*/

const List = () => {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/">All places I love</Breadcrumb.Item>
                <Breadcrumb.Item active>List</Breadcrumb.Item>
            </Breadcrumb>
            <div className='body-margin'>
                <h1>List </h1>
                <div>
                {
                   createListOfCity().forEach(obj => {
                        return placeInfoList.filter(place => {place.city == obj}).forEach(place => {
                            return <p>{place.description}</p>
                        })
                   })
                }
                </div>
            </div>

        </>
    );
   };
   
   export default List;