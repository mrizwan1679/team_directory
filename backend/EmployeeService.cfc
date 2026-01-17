
<cfcomponent rest="true" restPath="/employees">

    <!--- 
        Method: getEmployees
        Description: Fetches all employee records.
    --->
    <cffunction name="getEmployees" access="remote" httpMethod="GET" returnFormat="json">
        <cfheader name="Access-Control-Allow-Origin" value="*">
        
        <cfset var qEmployees = "">
        <cfset var result = []>

        <cftry>
            <cfquery name="qEmployees" datasource="SabreDB">
                SELECT ID, FirstName, LastName, Role
                FROM Employees
                ORDER BY LastName ASC
            </cfquery>

            <cfloop query="qEmployees">
                <cfset arrayAppend(result, {
                    "id": qEmployees.ID,
                    "firstName": qEmployees.FirstName,
                    "lastName": qEmployees.LastName,
                    "role": qEmployees.Role
                })>
            </cfloop>

            <cfreturn result>
            <cfcatch type="any">
                <cfheader statusCode="500">
                <cfreturn {"status": "error", "message": cfcatch.message}>
            </cfcatch>
        </cftry>
    </cffunction>

    <!--- 
        Method: getEmployee
        Description: Demonstrates SECURITY BEST PRACTICES using <cfqueryparam>
    --->
    <cffunction name="getEmployee" access="remote" httpMethod="GET" restPath="{id}" returnFormat="json">
        <cfargument name="id" type="numeric" required="true" restArgSource="path">
        <cfheader name="Access-Control-Allow-Origin" value="*">
        
        <cfset var qEmployee = "">
        
        <cfquery name="qEmployee" datasource="SabreDB">
            SELECT ID, FirstName, LastName, Role
            FROM Employees
            WHERE ID = <cfqueryparam value="#arguments.id#" cfsqltype="cf_sql_integer">
        </cfquery>

        <cfif qEmployee.recordCount>
            <cfreturn {
                "id": qEmployee.ID,
                "firstName": qEmployee.FirstName,
                "lastName": qEmployee.LastName,
                "role": qEmployee.Role
            }>
        <cfelse>
            <cfheader statusCode="404">
            <cfreturn {"status": "error", "message": "Employee not found"}>
        </cfif>
    </cffunction>

</cfcomponent>
