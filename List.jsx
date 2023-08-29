import CustomCard from './customCard'; 
import './customCard.css';
import staffList from './staffList';

function cardComponent(staff) {
    return (
        <CustomCard
            key={staff.key}
            avatar={staff.avatar}
            name={staff.name}
            description={staff.description}
            star={staff.star}
            author={staff.Author} 
        />
    );
}

function CardList() {
    return (
        <div className='customRow'> {}
            {staffList.map(cardComponent)}
        </div>
    );
}

export default CardList;
