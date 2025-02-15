import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Usercount } from "./components/Usercount";
import Streamcount from "./components/Streamcount";
import Topartist from "./components/Topartist";
import Usergrowth from "./components/Usergrowth";
import Revenue from "./components/Revenue";
import Topstremed from "./components/Topstremed";

import SongTable from './components/Table';

import datatable from "./components/DataOfTable";


// import { AppSidebar } from "@/components/app-sidebar"
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SidebarProvider>
          <SidebarInset>
            <header className="flex  h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">Streamify</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-xl text-blue-500 font-semibold hover:text-blue-300">Dashboard</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 ">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-muted/50">
                  <Usercount />
                </div>
                <div className="aspect-video rounded-xl bg-muted/5">
                  {" "}
                  <Streamcount />{" "}
                </div>
                <div className="aspect-video rounded-xl bg-muted/5">
                  <Topartist />
                </div>
              </div>
              <div className="min-h-[100vh] md:min-h-[50vh]  rounded-xl bg-muted/0 border-2  md:flex-row  flex flex-col gap-20  items-center justify-center">
                <div className=" sm:pl-4 md:pl-6 flex-1   rounded-lg flex items-center">
                  <Usergrowth />
                </div>
                <div className="sm:pl-4 md:pl-6 flex-1 rounded-lg flex items-center">
                  <Revenue />
                </div>
                <div className="sm:pl-4 md:pl-6 flex-1 rounded-lg flex items-center">
                  <Topstremed />
                </div>
              </div>
            </div>
            
            <div className="min-h-[100vh] w-[96%] mx-4 border-2 rounded-lg">
             
              <SongTable data={datatable}/>
            </div>


          </SidebarInset>
        </SidebarProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
