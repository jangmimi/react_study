// 컴포넌트 이름 AnimalsList

function Animal ({animal}) {
    return(
        <div>
            <h1>{animal.name}</h1>
            <h1>{animal.age}</h1>
            <h1>{animal.gender}</h1><hr/>
        </div>
    );
}
function AnimalsList() {
    const animals = [
        {
            id : 1,
            name : "Puppy",
            age : '1',
            gender : "M"
        },
        {
            id : 2,
            name : "lion",
            age : '5',
            gender : "F"
        }
    ]
    return(
        <div>
            <p>동물이름</p>
            <Animal animal={animals[0]} />
            <Animal animal={animals[1]} />
        </div>
    );
}
export default AnimalsList;