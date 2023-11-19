import './index.scss'

const AnimatedLetters = ({ letterClass, string, index }) => {
    var stringArray = createCharArray( string );
    return (
        <span>
            {
                stringArray.map(( char, i ) => (
                    <span key={ char + i } className={`${letterClass} _${ i + index}`} >
                        { char }
                    </span>
                ))
            }
        </span>
    )
}

const createCharArray = ( text ) => {
    var array = [];

    for (let index = 0; index < text.length; index++) {
        const element = text.charAt( index );
        console.log( element, index );
        array[ index ] = element;
    }
    return array;
}


export default AnimatedLetters;