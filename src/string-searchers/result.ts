import { Match } from './match.js';
import { Meta } from '../interfaces/meta.js';
import { Query } from '../interfaces/query.js';

/**
 * A string searcher result.
 */
export class Result {
  /**
   * Creates a new instance of the Result class.
   * @param matches The result matches.
   * @param query The search query.
   * @param meta The meta data.
   */
  public constructor(
    public readonly matches: Match[],
    public readonly query: Query,
    public readonly meta: Meta
  ) {}
}
