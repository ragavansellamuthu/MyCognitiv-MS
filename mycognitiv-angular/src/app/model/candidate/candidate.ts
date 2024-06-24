import { AuditData } from "../audit-data/audit-data";

export class Candidate extends AuditData{

    candidateId !: number ;
    name !: string ;
    email !: string ;
    password !: string ;
    age !: number ;
    mobileNumber !: number ;

}
