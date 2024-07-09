import { LoadingOpenClose } from '../loadingOpenClose'
import { APIRequest } from './APIRequest'

export const RequestHandler = async (searchValue: string): Promise<string> => {
    return APIRequest(searchValue).then((json) => {
        if (json) {
            //console.log(json)
            localStorage.setItem('searchValue', searchValue)
            LoadingOpenClose(true)
            return json
        }
        return '{}'
    })
}