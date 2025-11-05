import { IOClients } from '@vtex/api'
import Message from './message'


export class Clients extends IOClients {
    public get message() {
        return this.getOrSet('message', Message)
    }

}
