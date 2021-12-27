import { subDays, subMonths } from "date-fns";
import React from "react";
import { CreateProjectDto } from "web/openapi";

import { Button, Input, Sidebar, Textarea } from "@/ui";
import { useProjectMutation, useUserMutation } from "@/web/contexts/ApiContext";
import useFormHook from "@/web/hooks/useFormHook";

const Homepage = () => {
  const [createdUserData, createUser] = useUserMutation("createUser");
  const [createdProjectData, createProject] = useProjectMutation("createProject");

  // Use formik or maybe rely on the backend to give our validation
  const form = useFormHook();

  return (
    <div className="block md:grid grid-cols-[16rem,1fr] h-full">
      <Sidebar navigationConfig={[]} />
      <div className="px-4 py-8">
        <div className="flex flex-col items-start my-8 space-y-4">
          <div>
            <div className="flex flex-col items-start my-8 space-y-4">
              <Button onClick={() => createUser({ userCreateDto: {} })}>Create one more user</Button>
            </div>
            <pre>{createdUserData && JSON.stringify({ createdUserData }, null, 2)}</pre>
          </div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const values = form.formValues;
                const projectCreateDto: CreateProjectDto = {
                  user: { connect: { id: Number.parseInt(values.userId) } },
                  description: values.description,
                  endDate: subDays(new Date(), 4),
                  startDate: subMonths(new Date(), 8),
                  entity: values.entity,
                  name: values.name,
                  roles: [values.roles],
                  type: values.type,
                  url: values.url,
                  highlights: values.highlights.split(",").map((str) => str.trim()),
                  keywords: values.keywords.split(",").map((str) => str.trim()),
                };
                createProject({ projectCreateDto });
              }}
            >
              <div className="flex flex-col items-start my-8 space-y-4">
                <h1 className="text-3xl font-semibold">Add a project to the user</h1>
                <div className="grid grid-cols-3 gap-4">
                  <Input label="User ID" id="userId" pattern="^[0-9]\d+$" required {...form} />
                  <div className="col-span-2">
                    <Input label="Project Name" id="name" required {...form} />
                  </div>
                  <div className="col-span-1">
                    <Input label="Project Type" id="type" required {...form} />
                  </div>
                  <div className="col-span-1">
                    <Input label="Project Entity" id="entity" required {...form} />
                  </div>
                  <div className="col-span-3">
                    <Textarea label="Project Description" id="description" required {...form} />
                  </div>
                  <Input label="Project Role" id="roles" required {...form} />
                  <div className="col-span-3">
                    <Input label="Project Highlights" hint="Comma seperated with space after comma, f.e. 'Foo, bar, world'" id="highlights" required {...form} />
                  </div>
                  <div className="col-span-3">
                    <Input label="Project Keywords" hint="Comma seperated with space after comma, f.e. 'Foo, bar, world'" id="keywords" required {...form} />
                  </div>
                  <Input label="Project Url" id="url" required {...form} />
                </div>
                <Button type="submit">Create project</Button>
              </div>
              <pre>{createdProjectData && JSON.stringify({ createdProjectData }, null, 2)}</pre>
            </form>
            <pre>{createdUserData && JSON.stringify({ createdUserData }, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
