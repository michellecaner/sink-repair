import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./Requests.js"


export const SinkRepair = () => {
    return `
        <h1 class="title">Maude and Merle's Sink Repair</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>
        <section>
            <h2 class="serviceRequests">Service Requests</h2>
            ${Requests()}
        </section>
            `
}

