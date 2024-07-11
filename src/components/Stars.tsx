import Star from './Star';

const Stars = ({count = 0}: {count: number}) => {

    const arrStars = [];

    if (count < 0 || count > 5 || typeof count != 'number') {
        return null;
    }

    for (let i = 0; i < count; i++ ) { 
        arrStars.push(i);
    }

    return(
        <>
          
            <ul className="card-body-stars u-clearfix">
                {arrStars.map((e) => (
                    <Star key={e} />
                ))} 
            </ul>
           
        </>
    )
}

export default Stars;