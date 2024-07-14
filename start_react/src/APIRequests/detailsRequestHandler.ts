
import { APIRequest } from './APIRequest'

export const detailsRequestHandler = async (searchValue: string): Promise<string> => {
    return APIRequest(`${searchValue}`).then((json) => {
        if (json) {
            return json
        }
        return '{}'
    })
}