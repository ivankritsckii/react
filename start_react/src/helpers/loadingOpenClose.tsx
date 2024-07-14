import PacmanLoader from 'react-spinners/PacmanLoader'

export const LoadingOpenClose = (state: boolean) => {
    return state ? (
        ''
    ) : (
        <div className="loading">
            <PacmanLoader color={'#36D7B7'} size={150} />{' '}
        </div>
    )
}
