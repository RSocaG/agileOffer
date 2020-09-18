import { GetAllQueryParsedDto } from './interfaces';
import { GetAllQueryDto } from './dto';
export declare class RequestParserService {
    static parseQuery(query: GetAllQueryDto): GetAllQueryParsedDto;
}
