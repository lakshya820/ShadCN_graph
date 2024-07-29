import { default as React, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../components/ui/card"

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import MainLayout from "./MainLayout";
import '../css/Tests2.css';

const Tests2: React.FC = () => {
  return (
    <div className="tests2">
            <div className="tests2_content">
                
                <div className="Card">
                    <Card className="w-[1080px] ">
                    <CardHeader>
                        <CardTitle>Empathy</CardTitle>
                        <CardDescription>This test is focused to teach learners how to empathize with users, when they are upset because of the issue they are facing.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">#Question 1</Label>
                            <Label htmlFor="marker">Mark contacted Service Desk as his VPN connection is unstable. He is upset because of this intermittent connection issue. How will you empathize Mark?</Label>
                            <Input id="name" placeholder="Answer Transcript" />

                            </div>
                            <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="framework">Important instructions: Press the 'Enable mic' button to respond. After finishing your answer, click 'Submit'.</Label>
                            
                            </div>
                        </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Enable Mic</Button>
                        <Button>Submit</Button>
                    </CardFooter>
                    </Card>
                </div>
            </div>
    </div>
  )
}

export default Tests2;