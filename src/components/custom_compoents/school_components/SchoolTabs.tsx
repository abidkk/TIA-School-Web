import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { StudentLogin } from "./student_components/StudentLogin"
import { FacultyLogin } from "./faculty_components/FacultyLogin"
import { AdminLogin } from "./faculty_components/AdminLogin"
import VisitSchool from "./visitor_components/VisitSchool"

export function SchoolTabs() {
    return (
        <Tabs defaultValue="visitor" className="w-full ">
            <TabsList className="grid w-full grid-cols-1  md:grid-cols-4 gap-1 md:bg-green-900">
                <TabsTrigger value="visitor" className="text-white bg-green-900">Visitor</TabsTrigger>
                <TabsTrigger value="students" className="text-white bg-green-900">Students</TabsTrigger>
                <TabsTrigger value="faculty" className="text-white bg-green-900">Faculty</TabsTrigger>
                <TabsTrigger value="admin" className="text-white bg-green-900">Admin</TabsTrigger>

            </TabsList>

            {/* visitor  */}
            <TabsContent value="visitor">
                <div className="bg-gray-100 p-2 w-full h-screen mt-28 md:mt-0">
                    <VisitSchool/>
                </div>
            </TabsContent>


            {/* student */}
            <TabsContent value="students">
                <div className="bg-gray-100 p-2 w-full h-screen mt-28 md:mt-0">
                    <div className="flex justify-center">
                        <StudentLogin/>
                    </div>
                </div>
            </TabsContent>


            {/* faculty */}
            <TabsContent value="faculty">
                <div className="bg-gray-100 p-2 w-full h-screen mt-28 md:mt-0">
                    <div className="flex justify-center">
                        <FacultyLogin/>
                    </div>
                </div>
            </TabsContent>

            {/* admin */}
            <TabsContent value="admin">
            <div className="bg-gray-100 p-2 w-full h-screen mt-28 md:mt-0">
                    <div className="flex justify-center">
                        <AdminLogin/>
                    </div>
                </div>
            </TabsContent>


        </Tabs>
    )
}
