import { AuditData } from "../AuditData/audit-data";

export class Candidate extends AuditData{

    candidateId !: number ;
    name !: string ;
    email !: string ;
    password !: string ;
    age !: number ;
    mobileNumber !: number ;

}
