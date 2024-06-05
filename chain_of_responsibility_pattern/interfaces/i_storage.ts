"use strict"

import ISearchResult from "./i_search_result"

export default interface IStorage {
    find(name: string): ISearchResult
    setNext(storage: IStorage):void
}