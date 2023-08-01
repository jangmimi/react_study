import './App.css'; // css 적용을 위해 임포트

// 음식점 컴포넌트 생성
function Restaurant( {restaurant} ) {
    return (
        <div>
            <b>음식점 이름 : {restaurant.name}</b><br/>
            <b>음식점 위치 : {restaurant.location}</b><br/>
            <b>음식점 분류 : {restaurant.food}</b><br/>
        </div>
    );
}

// 음식점 리스트 컴포넌트
function RestaurantList() {
    const restaurants = [
        {
            id : 1,
            name : "투다리",
            location : "강남",
            food : "술집"
        },
        {
            id : 2,
            name : "김밥천국",
            location : "종로",
            food : "밥집"
        },
        {
            id : 3,
            name : "컴포즈 커피",
            location : "역삼",
            food : "커피샵"
        }
    ]
    return( // 배운 2가지 case를 통해 출력해보기
        <div className="container">
            <h2>[ 음식점 정보 ]</h2>
            <b className='etc'>* 출력 case 1 *</b>
            <Restaurant restaurant={restaurants[0]}/><hr/>
            <Restaurant restaurant={restaurants[1]}/><hr/>
            <Restaurant restaurant={restaurants[2]}/><hr/>

            <br/><br/>

            <b className='etc'>* 출력 case 2 *</b><br/>
            <b>음식점 이름 : {restaurants[0].name}</b><br/>
            <b>음식점 위치 : {restaurants[0].location}</b><br/> 
            <b>음식점 분류 : {restaurants[0].food}</b><br/><hr/> 
            <b>음식점 이름 : {restaurants[1].name}</b><br/>
            <b>음식점 위치 : {restaurants[1].location}</b><br/> 
            <b>음식점 분류 : {restaurants[1].food}</b><br/><hr/>
            <b>음식점 이름 : {restaurants[2].name}</b><br/>
            <b>음식점 위치 : {restaurants[2].location}</b><br/> 
            <b>음식점 분류 : {restaurants[2].food}</b><br/> 
        </div>
    );
}
export default RestaurantList;