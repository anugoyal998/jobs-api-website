"use client";

import { FC } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import SimpleBar from "simplebar-react";
import Code from "@/components/Code";
import { nodejs, python } from "@/helpers/documentation-code";

import * as RadixTabs from "@radix-ui/react-tabs";

const DocumentationTabs: FC = () => {
  // return <Tabs defaultValue='nodejs' className='max-w-2xl w-full'>
  //   <TabsList>
  //       <TabsTrigger value='nodejs' >NodeJS</TabsTrigger>
  //       <TabsTrigger value='python' >Python</TabsTrigger>
  //   </TabsList>
  //   <TabsContent value='nodejs' >
  //       <SimpleBar></SimpleBar>
  //       <Code language='javascript' code={nodejs} show />
  //   </TabsContent>
  //   <TabsContent value='python' ></TabsContent>
  // </Tabs>
  return (
    <RadixTabs.Root defaultValue="nodejs" className="max-w-2xl w-full">
      <RadixTabs.List className="inline-flex items-center justify-center rounded-md bg-slate-100 p-1 dark:bg-slate-800">
        <RadixTabs.Trigger
          className="inline-flex min-w-[100px] items-center justify-center rounded-[0.185rem] px-3 py-1.5  text-sm font-medium text-slate-700 transition-all  disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm dark:text-slate-200 dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-slate-100"
          value="nodejs"
        >
          NodeJS
        </RadixTabs.Trigger>
        <RadixTabs.Trigger
          className="inline-flex min-w-[100px] items-center justify-center rounded-[0.185rem] px-3 py-1.5  text-sm font-medium text-slate-700 transition-all  disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm dark:text-slate-200 dark:data-[state=active]:bg-slate-900 dark:data-[state=active]:text-slate-100"
          value="python"
        >
          Python
        </RadixTabs.Trigger>
      </RadixTabs.List>
      <RadixTabs.Content
        className="mt-2 rounded-md border border-slate-300 bg-slate-100 p-6 dark:border-slate-700 dark:bg-slate-900"
        value="nodejs"
      >
        <SimpleBar>
          <Code language='javascript' code={nodejs} show animated />
        </SimpleBar>
      </RadixTabs.Content>
      <RadixTabs.Content
        className="mt-2 rounded-md border border-slate-300 bg-slate-100 p-6 dark:border-slate-700 dark:bg-slate-900"
        value="python"
      >
        {/* <SimpleBar></SimpleBar> */}
        <Code language='python' code={python} show animated />
      </RadixTabs.Content>
    </RadixTabs.Root>
  );
};

export default DocumentationTabs;
