import { LoadingOpenClose } from '../helpers/loadingOpenClose'
import { APIRequest } from './APIRequest'

export const RequestHandler = async (searchValue: string, page?: number): Promise<string> => {
    let request = "";
    page ? request = `${searchValue}&page=${page}` : request = searchValue
    return APIRequest(`${request}`).then((json) => {
        if (json) {
            localStorage.setItem('searchValue', searchValue)
            LoadingOpenClose(true)
            return json
        }
        return '{}'
    })
}