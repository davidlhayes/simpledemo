import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Template {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly content: string;
  constructor(init: ModelInit<Template>);
  static copyOf(source: Template, mutator: (draft: MutableModel<Template>) => MutableModel<Template> | void): Template;
}