"use strict"

import IMedicine from "./i_medicine"

export default interface ISearchResult  extends IMedicine{
    location: string
}