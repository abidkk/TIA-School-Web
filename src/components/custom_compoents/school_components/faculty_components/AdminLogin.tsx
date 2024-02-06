import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export function AdminLogin() {
    return (
        <Tabs defaultValue="login" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">SignUp</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
                <Card>
                    <CardHeader>
                        <CardTitle>Admin Login</CardTitle>
                        <CardDescription>
                            Please Enter Your Id and Name.
                        </CardDescription>
                    </CardHeader>


                    <CardContent className="space-y-2">
                        <form action="">
                            <div className="py-2">
                                <label>ID</label> <br />
                                <input type="text" placeholder="tia-021" className="px-4 py-2 rounded-md w-full border border-gray-200" /> <br />
                            </div>
                            <div className="py-2">
                                <label>Name</label> <br />
                                <input type="text" placeholder="Muhammad Rayan" className="px-4 py-2 rounded-md w-full border border-gray-300" />
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Button className="bg-green-900">Login</Button>
                    </CardFooter>
                </Card>
            </TabsContent>




            <TabsContent value="signup">
                <Card>
                    <CardHeader>
                        <CardTitle>Admin SignUp</CardTitle>
                        <CardDescription>
                            Please Enter Name, Designation and Phone Number.
                        </CardDescription>
                    </CardHeader>


                    <CardContent className="space-y-2">
                        <form action="">
                        <div className="py-2">
                                <label>Name</label> <br />
                                <input type="text" placeholder="Aslam Khan" className="px-4 py-2 rounded-md w-full border border-gray-300" />
                            </div>
                            <div className="py-2">
                                <label>Designation</label> <br />
                                <input type="text" placeholder="Teacher" className="px-4 py-2 rounded-md w-full border border-gray-200" /> <br />
                            </div>
                            <div className="py-2">
                                <label>Phone </label> <br />
                                <input type="text" placeholder="03122646268" className="px-4 py-2 rounded-md w-full border border-gray-300" />
                            </div>

                        </form>
                    </CardContent>
                    <CardFooter>
                        <Button className="bg-green-900">SignUp</Button>
                    </CardFooter>
                </Card>
            </TabsContent>

        </Tabs>
    )
}
