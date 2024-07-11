import Star from './Star';

const Stars = ({count = 0}: {count: number}) => {

    const arrStars = [];

    if (count < 0 || count > 5) {
        return null;
    }

    for (let i = 0; i < count; i++ ) { 
        arrStars.push(i);
    }

    console.log(arrStars);

    return(
        <>
          {arrStars.map((e) => (
                <Star key={e} />
          ))}  
        </>
    )
}

export default Stars;